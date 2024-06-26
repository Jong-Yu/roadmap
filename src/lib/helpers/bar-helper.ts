// *** OTHER ***
import { Task, TaskType } from '../types/public-types';
import { BarTask, TaskTypeInternal } from '../types/bar-task';
import { BarMoveAction } from '../types/gantt-task-actions';
import { BAR_COLORS, DEFAULT_BAR_COLOR } from '../RoadMap/constant/barColor';

// *** TYPES ***
export interface IConvertToBarTasksArgs {
  tasks: Task[];
  dates: Date[];
  rtl: boolean;
  multiBarRowMode?: boolean;
  // styles
  columnWidth: number;
  rowHeight: number;
  taskHeight: number;
  barCornerRadius: number;
  handleWidth: number;
  backgroundColor?: string;
  backgroundSelectedColor?: string;
}

export type IConvertToBarTaskArgs = {
  task: Task;
  taskIndex: number;
  dateDelta: number;
} & Exclude<IConvertToBarTasksArgs, 'tasks'>;

export const convertToBarTasks = (
  args: IConvertToBarTasksArgs,
  conversion: (
    args: IConvertToBarTaskArgs,
    projectIndex: number,
  ) => BarTask = convertToBarTask,
) => {
  const { tasks, dates } = args;
  let projectIndex = -1;

  const dateDelta =
    dates[1].getTime() -
    dates[0].getTime() -
    dates[1].getTimezoneOffset() * 60 * 1000 +
    dates[0].getTimezoneOffset() * 60 * 1000;

  return tasks.map((task, index) => {
    if (task.type === 'project') projectIndex++;

    return conversion(
      {
        ...args,
        task: task,
        taskIndex: index,
        dateDelta: dateDelta,
      },
      projectIndex,
    );
  });
};

export const convertToBarTask = (
  args: IConvertToBarTaskArgs,
  projectIndex: number,
): BarTask => {
  const colorIndex =
    projectIndex > BAR_COLORS.length
      ? projectIndex % BAR_COLORS.length
      : projectIndex;
  const backgroundColor = BAR_COLORS[colorIndex];

  const map: { [key in TaskType]: BarTask } = {
    task: convertToBar({ ...args, backgroundColor }),
    project: convertToProject({ ...args, backgroundColor }),
  };

  return map[args.task.type];
};

export const convertToBar = (args: IConvertToBarTaskArgs): BarTask => {
  const {
    task,
    taskIndex,
    dates,
    dateDelta,
    rtl,
    multiBarRowMode,
    // style
    columnWidth,
    rowHeight,
    taskHeight,
    barCornerRadius,
    handleWidth,
    backgroundColor,
  } = args;

  let x1: number;
  let x2: number;

  if (rtl) {
    x2 = taskXCoordinateRTL(task.start, dates, dateDelta, columnWidth);
    x1 = taskXCoordinateRTL(task.end, dates, dateDelta, columnWidth);
  } else {
    x1 = taskXCoordinate(task.start, dates, dateDelta, columnWidth);
    x2 = taskXCoordinate(task.end, dates, dateDelta, columnWidth);
  }

  let typeInternal: TaskTypeInternal = task.type;

  if (typeInternal === 'task' && x2 - x1 < handleWidth * 2) {
    typeInternal = 'smalltask';
    x2 = x1 + handleWidth * 2;
  }

  const customIndex: number =
    multiBarRowMode === true && typeof task.line !== 'undefined'
      ? task.line
      : taskIndex;
  const y = taskYCoordinate(customIndex, rowHeight, taskHeight);
  const expanded = task.type === 'project' ? task.expanded : undefined;

  const styles = {
    backgroundColor: backgroundColor || DEFAULT_BAR_COLOR,
    ...task.styles,
  };

  return {
    ...task,
    typeInternal,
    x1,
    x2,
    y,
    index: taskIndex,
    barCornerRadius,
    handleWidth,
    expanded,
    height: taskHeight,
    barChildren: [],
    styles,
  };
};

export const convertToProject = (args: IConvertToBarTaskArgs): BarTask => {
  const {
    task,
    taskIndex,
    dates,
    dateDelta,
    rtl,
    multiBarRowMode,
    // style
    columnWidth,
    rowHeight,
    taskHeight,
    barCornerRadius,
    handleWidth,
    backgroundColor,
  } = args;

  let x1: number;
  let x2: number;

  if (rtl) {
    x2 = taskXCoordinateRTL(task.start, dates, dateDelta, columnWidth);
    x1 = taskXCoordinateRTL(task.end, dates, dateDelta, columnWidth);
  } else {
    x1 = taskXCoordinate(task.start, dates, dateDelta, columnWidth);
    x2 = taskXCoordinate(task.end, dates, dateDelta, columnWidth);
  }

  const customIndex: number =
    multiBarRowMode === true && typeof task.line !== 'undefined'
      ? task.line
      : taskIndex;
  const y = taskYCoordinate(customIndex, rowHeight, taskHeight);
  const expanded = task.type === 'project' ? task.expanded : undefined;

  const styles = {
    backgroundColor: backgroundColor || DEFAULT_BAR_COLOR,
    ...task.styles,
  };

  return {
    ...task,
    typeInternal: task.type,
    x1,
    x2,
    y,
    index: taskIndex,
    barCornerRadius,
    handleWidth,
    expanded,
    height: taskHeight,
    barChildren: [],
    styles,
  };
};

const taskXCoordinate = (
  xDate: Date,
  dates: Date[],
  dateDelta: number,
  columnWidth: number,
) => {
  const index = ~~(
    (xDate.getTime() -
      dates[0].getTime() +
      xDate.getTimezoneOffset() -
      dates[0].getTimezoneOffset()) /
    dateDelta
  );
  const x = Math.round(
    (index +
      (xDate.getTime() -
        dates[index].getTime() -
        xDate.getTimezoneOffset() * 60 * 1000 +
        dates[index].getTimezoneOffset() * 60 * 1000) /
        dateDelta) *
      columnWidth,
  );
  return x;
};
const taskXCoordinateRTL = (
  xDate: Date,
  dates: Date[],
  dateDelta: number,
  columnWidth: number,
) => {
  let x = taskXCoordinate(xDate, dates, dateDelta, columnWidth);
  x += columnWidth;
  return x;
};
const taskYCoordinate = (
  index: number,
  rowHeight: number,
  taskHeight: number,
) => {
  const y = index * rowHeight + (rowHeight - taskHeight) / 2;
  return y;
};

export const progressWithByParams = (
  taskX1: number,
  taskX2: number,
  rtl: boolean,
) => {
  const progressWidth = (taskX2 - taskX1) * 0.01;
  let progressX: number;
  if (rtl) {
    progressX = taskX2 - progressWidth;
  } else {
    progressX = taskX1;
  }
  return [progressWidth, progressX];
};

export const progressByProgressWidth = (
  progressWidth: number,
  barTask: BarTask,
) => {
  const barWidth = barTask.x2 - barTask.x1;
  const progressPercent = Math.round((progressWidth * 100) / barWidth);
  if (progressPercent >= 100) return 100;
  else if (progressPercent <= 0) return 0;
  else return progressPercent;
};

export const getProgressPoint = (
  progressX: number,
  taskY: number,
  taskHeight: number,
) => {
  const point = [
    progressX - 5,
    taskY + taskHeight,
    progressX + 5,
    taskY + taskHeight,
    progressX,
    taskY + taskHeight - 8.66,
  ];
  return point.join(',');
};

const startByX = (x: number, xStep: number, task: BarTask) => {
  if (x >= task.x2 - task.handleWidth * 2) {
    x = task.x2 - task.handleWidth * 2;
  }
  const steps = Math.round((x - task.x1) / xStep);
  const additionalXValue = steps * xStep;
  const newX = task.x1 + additionalXValue;
  return newX;
};

const endByX = (x: number, xStep: number, task: BarTask) => {
  if (x <= task.x1 + task.handleWidth * 2) {
    x = task.x1 + task.handleWidth * 2;
  }
  const steps = Math.round((x - task.x2) / xStep);
  const additionalXValue = steps * xStep;
  const newX = task.x2 + additionalXValue;
  return newX;
};

const moveByX = (x: number, xStep: number, task: BarTask) => {
  const steps = Math.round((x - task.x1) / xStep);
  const additionalXValue = steps * xStep;
  const newX1 = task.x1 + additionalXValue;
  const newX2 = newX1 + task.x2 - task.x1;
  return [newX1, newX2];
};

const dateByX = (
  x: number,
  taskX: number,
  taskDate: Date,
  xStep: number,
  timeStep: number,
) => {
  let newDate = new Date(((x - taskX) / xStep) * timeStep + taskDate.getTime());
  newDate = new Date(
    newDate.getTime() +
      (newDate.getTimezoneOffset() - taskDate.getTimezoneOffset()) * 60000,
  );
  return newDate;
};

/**
 * Method handles event in real time(mousemove) and on finish(mouseup)
 */
export const handleTaskBySVGMouseEvent = (
  svgX: number,
  action: BarMoveAction,
  selectedTask: BarTask,
  xStep: number,
  timeStep: number,
  initEventX1Delta: number,
  rtl: boolean,
): { isChanged: boolean; changedTask: BarTask } => {
  let result: { isChanged: boolean; changedTask: BarTask };
  switch (selectedTask.type) {
    default:
      result = handleTaskBySVGMouseEventForBar(
        svgX,
        action,
        selectedTask,
        xStep,
        timeStep,
        initEventX1Delta,
        rtl,
      );
      break;
  }
  return result;
};

const handleTaskBySVGMouseEventForBar = (
  svgX: number,
  action: BarMoveAction,
  selectedTask: BarTask,
  xStep: number,
  timeStep: number,
  initEventX1Delta: number,
  rtl: boolean,
): { isChanged: boolean; changedTask: BarTask } => {
  const changedTask: BarTask = { ...selectedTask };
  let isChanged = false;
  switch (action) {
    case 'start': {
      const newX1 = startByX(svgX, xStep, selectedTask);
      changedTask.x1 = newX1;
      isChanged = changedTask.x1 !== selectedTask.x1;
      if (isChanged) {
        if (rtl) {
          changedTask.end = dateByX(
            newX1,
            selectedTask.x1,
            selectedTask.end,
            xStep,
            timeStep,
          );
        } else {
          changedTask.start = dateByX(
            newX1,
            selectedTask.x1,
            selectedTask.start,
            xStep,
            timeStep,
          );
        }
      }
      break;
    }
    case 'end': {
      const newX2 = endByX(svgX, xStep, selectedTask);
      changedTask.x2 = newX2;
      isChanged = changedTask.x2 !== selectedTask.x2;
      if (isChanged) {
        if (rtl) {
          changedTask.start = dateByX(
            newX2,
            selectedTask.x2,
            selectedTask.start,
            xStep,
            timeStep,
          );
        } else {
          changedTask.end = dateByX(
            newX2,
            selectedTask.x2,
            selectedTask.end,
            xStep,
            timeStep,
          );
        }
      }
      break;
    }
    case 'move': {
      const [newMoveX1, newMoveX2] = moveByX(
        svgX - initEventX1Delta,
        xStep,
        selectedTask,
      );
      isChanged = newMoveX1 !== selectedTask.x1;
      if (isChanged) {
        changedTask.start = dateByX(
          newMoveX1,
          selectedTask.x1,
          selectedTask.start,
          xStep,
          timeStep,
        );
        changedTask.end = dateByX(
          newMoveX2,
          selectedTask.x2,
          selectedTask.end,
          xStep,
          timeStep,
        );
        changedTask.x1 = newMoveX1;
        changedTask.x2 = newMoveX2;
      }
      break;
    }
  }
  return { isChanged, changedTask };
};
