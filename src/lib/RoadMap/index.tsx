// *** NPM ***
import React, { useState, SyntheticEvent, useRef, useEffect } from 'react';

// *** OTHER ***
import {
  ViewMode,
  Task,
  EventOption,
  DisplayOption,
  StylingOption,
} from '../types/public-types';
import { GridProps } from '../containers/Grid/Grid';
import { ganttDateRange, seedDates } from '../helpers/date-helper';
import { CalendarProps } from '../containers/Calendar/Calendar';
import { RoadMapTaskContentProps } from './components/RoadMapTaskContent';
import {
  TaskListHeader
} from '../containers/TaskList/components/TaskListHeader';
import {
  TaskListTable
} from '../containers/TaskList/components/TaskListTable';
import { Tooltip } from '../components/Tooltip';
import { TooltipContent } from '../components/Tooltip/TooltipContent';
import { VerticalScroll } from '../components/VerticalScroll';
import { TaskList, TaskListProps } from '../containers/TaskList';
import { RoadMapTask } from './components/RoadMapTask';
import { BarTask } from '../types/bar-task';
import { convertToBarTasks } from '../helpers/bar-helper';
import { GanttEvent } from '../types/gantt-task-actions';
import { DateSetup } from '../types/date-setup';
import { HorizontalScroll } from '../components/HorizontalScroll';
import { removeHiddenTasks } from '../helpers/other-helper';
import { OptionalKeys } from '../types/custom';

// *** TYPES ***
export type RoadMapProps = Partial<EventOption> &
  Partial<DisplayOption> &
  Partial<StylingOption> & {
    tasks: Task[];
    bodyStyle?: React.CSSProperties;
  };

type TOptionalPropsKeys = Exclude<OptionalKeys<RoadMapProps>, undefined>;
type TOptionalProps = Required<Pick<RoadMapProps, TOptionalPropsKeys>>;

export const defaultRoadMapProps: TOptionalProps = {
  // general
  bodyStyle: {
    display: 'flex',
    padding: '0',
    margin: '0',
    listStyle: 'none',
    outline: 'none',
    position: 'relative',
  },
  // event options
  timeStep: 300000,
  onDateChange: () => { },
  onProgressChange: () => { },
  onDoubleClick: () => { },
  onDelete: () => { },
  onSelect: () => { },
  onExpanderClick: () => { },
  // display options
  viewMode: ViewMode.Day,
  locale: 'ko-KR',
  rtl: false,
  // styling options
  headerHeight: 50,
  columnWidth: 60,
  listCellWidth: '155px',
  rowHeight: 50,
  ganttHeight: 300,
  barFill: 60,
  barCornerRadius: 3,
  handleWidth: 8,
  todayColor: 'rgba(252, 248, 227, 0.5)',
  TooltipContent: TooltipContent,
};

export const RoadMap = (props: RoadMapProps & typeof defaultRoadMapProps) => {
  // *** PROPS ***
  const {
    // general
    tasks: propsTasks,
    bodyStyle,
    // event options
    timeStep,
    onDateChange,
    onProgressChange,
    onDoubleClick,
    onDelete,
    onSelect,
    onExpanderClick,
    // display options
    viewMode,
    locale,
    rtl,
    // styling options
    headerHeight,
    columnWidth,
    listCellWidth,
    rowHeight,
    ganttHeight,
    barFill,
    barCornerRadius,
    handleWidth,
    todayColor,
    TooltipContent,
  } = props;

  // *** USE STATE ***
  const [tasks, setTasks] = useState<Task[]>(propsTasks);
  const [dateSetup, setDateSetup] = useState<DateSetup>(() => {
    const [startDate, endDate] = ganttDateRange(tasks, viewMode);
    return { viewMode, dates: seedDates(startDate, endDate, viewMode) };
  });
  const [taskHeight, setTaskHeight] = useState((rowHeight * barFill) / 100);
  const [taskListWidth, setTaskListWidth] = useState(0);
  const [svgContainerWidth, setSvgContainerWidth] = useState(0);
  const [svgContainerHeight, setSvgContainerHeight] = useState(ganttHeight);
  const [barTasks, setBarTasks] = useState<BarTask[]>([]);
  const [ganttEvent, setGanttEvent] = useState<GanttEvent>({
    action: '',
  });
  const [selectedTask, setSelectedTask] = useState<BarTask>();
  const [failedTask, setFailedTask] = useState<BarTask | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(-1);
  const [ignoreScrollEvent, setIgnoreScrollEvent] = useState(false);

  // *** USE REF ***
  const wrapperRef = useRef<HTMLDivElement>(null);
  const taskListRef = useRef<HTMLDivElement>(null);

  const svgWidth = dateSetup.dates.length * columnWidth;
  const ganttFullHeight = barTasks.length * rowHeight;

  // *** USE EFFECT ***
  useEffect(() => setTasks(propsTasks), [propsTasks])

  useEffect(() => {
    const filteredTasks: Task[] = onExpanderClick!!
      ? removeHiddenTasks(tasks)
      : tasks;

    const [startDate, endDate] = ganttDateRange(filteredTasks, viewMode);
    let newDates = seedDates(startDate, endDate, viewMode);

    if (rtl) {
      newDates = newDates.reverse();
      if (scrollX === -1) {
        setScrollX(newDates.length * columnWidth);
      }
    }

    setDateSetup({ dates: newDates, viewMode });

    setBarTasks(
      convertToBarTasks({
        tasks: filteredTasks,
        dates: newDates,
        columnWidth,
        rowHeight,
        taskHeight,
        barCornerRadius,
        handleWidth,
        rtl
      }),
    );
  }, [
    tasks,
    viewMode,
    rowHeight,
    barCornerRadius,
    columnWidth,
    taskHeight,
    handleWidth,
    rtl,
    scrollX,
    onExpanderClick,
  ]);

  useEffect(() => {
    const { changedTask, action } = ganttEvent;

    if (changedTask) {
      if (action === 'delete') {
        setGanttEvent({ action: '' });
        setBarTasks(barTasks.filter((t) => t.id !== changedTask.id));
      } else if (
        action === 'move' ||
        action === 'end' ||
        action === 'start' ||
        action === 'progress'
      ) {
        const prevStateTask = barTasks.find((t) => t.id === changedTask.id);

        if (
          prevStateTask &&
          (prevStateTask.start.getTime() !== changedTask.start.getTime() ||
            prevStateTask.end.getTime() !== changedTask.end.getTime() ||
            prevStateTask.progress !== changedTask.progress)
        ) {
          // actions for change
          const newTaskList = barTasks.map((t) =>
            t.id === changedTask.id ? changedTask : t,
          );

          setBarTasks(newTaskList);
        }
      }
    }
  }, [ganttEvent, barTasks]);

  useEffect(() => {
    if (wrapperRef.current) {
      setSvgContainerWidth(wrapperRef.current.offsetWidth - taskListWidth);
    }
  }, [wrapperRef, taskListWidth]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.shiftKey || event.deltaX) {
        const scrollMove = event.deltaX ? event.deltaX : event.deltaY;
        let newScrollX = scrollX + scrollMove;
        if (newScrollX < 0) {
          newScrollX = 0;
        } else if (newScrollX > svgWidth) {
          newScrollX = svgWidth;
        }
        setScrollX(newScrollX);
        event.preventDefault();
      } else if (ganttHeight) {
        let newScrollY = scrollY + event.deltaY;
        if (newScrollY < 0) {
          newScrollY = 0;
        } else if (newScrollY > ganttFullHeight - ganttHeight) {
          newScrollY = ganttFullHeight - ganttHeight;
        }
        if (newScrollY !== scrollY) {
          setScrollY(newScrollY);
          event.preventDefault();
        }
      }

      setIgnoreScrollEvent(true);
    };

    // subscribe if scroll is necessary
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('wheel', handleWheel, {
        passive: false,
      });
    }
    return () => {
      if (wrapperRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        wrapperRef.current.removeEventListener('wheel', handleWheel);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef.current, scrollY, scrollX, ganttHeight, svgWidth, rtl]);

  useEffect(() => {
    if (failedTask) {
      setBarTasks(
        barTasks.map((t) => (t.id !== failedTask.id ? t : failedTask)),
      );
      setFailedTask(null);
    }
  }, [failedTask, barTasks]);

  useEffect(() => {
    const newTaskHeight = (rowHeight * barFill) / 100;
    if (newTaskHeight !== taskHeight) {
      setTaskHeight(newTaskHeight);
    }
  }, [rowHeight, barFill, taskHeight]);

  useEffect(() => {
    if (!listCellWidth) {
      setTaskListWidth(0);
    }
    if (taskListRef.current) {
      setTaskListWidth(taskListRef.current.offsetWidth);
    }
  }, [taskListRef, listCellWidth]);

  useEffect(() => {
    if (ganttHeight) {
      setSvgContainerHeight(ganttHeight + headerHeight);
    } else {
      setSvgContainerHeight(tasks.length * rowHeight + headerHeight);
    }
  }, [ganttHeight, headerHeight, rowHeight, tasks]);

  // *** HANDLERS ***
  const handleScrollY = (event: SyntheticEvent<HTMLDivElement>) => {
    if (scrollY !== event.currentTarget.scrollTop && !ignoreScrollEvent) {
      setScrollY(event.currentTarget.scrollTop);
    }
    setIgnoreScrollEvent(false);
  };

  const handleScrollX = (event: SyntheticEvent<HTMLDivElement>) => {
    if (scrollX !== event.currentTarget.scrollLeft && !ignoreScrollEvent) {
      setScrollX(event.currentTarget.scrollLeft);
    }
    setIgnoreScrollEvent(false);
  };

  const handleSelectedTask = (taskId: string) => {
    const newSelectedTask = barTasks.find((t) => t.id === taskId);
    const oldSelectedTask = barTasks.find(
      (t) => !!selectedTask && t.id === selectedTask.id,
    );

    if (onSelect) {
      if (oldSelectedTask) {
        onSelect(oldSelectedTask, false);
      }
      if (newSelectedTask) {
        onSelect(newSelectedTask, true);
      }
    }

    setSelectedTask(newSelectedTask);
  };

  const handleExpanderClick = (task: Task) => {
    if (onExpanderClick && task.expanded !== undefined) {
      onExpanderClick({ ...task, expanded: !task.expanded });
    }
  };

  // *** CONDITIONALS ***
  const gridProps: GridProps = {
    columnWidth,
    svgWidth,
    tasks: tasks,
    rowHeight,
    dates: dateSetup.dates,
    todayColor,
    rtl,
  };

  const calendarProps: CalendarProps = {
    dateSetup,
    locale,
    headerHeight,
    columnWidth,
    rtl,
  };

  const barProps: RoadMapTaskContentProps = {
    tasks: barTasks,
    dates: dateSetup.dates,
    ganttEvent,
    selectedTask,
    rowHeight,
    taskHeight,
    columnWidth,
    timeStep,
    svgWidth,
    rtl,
    setGanttEvent,
    setFailedTask,
    setSelectedTask: handleSelectedTask,
    onDateChange,
    onProgressChange,
    onDoubleClick,
    onDelete,
  };

  const taskListProps: TaskListProps = {
    scrollY,
    // components
    TaskListHeader: TaskListHeader,
    TaskListTable: TaskListTable,
    // components props
    taskListHeaderProps: {
      columns: ["Name"]
    },
    taskListTableProps: {
      tasks: barTasks,
      onExpanderClick: handleExpanderClick,
    },
    // styles
    taskListTableWrapperStyles: {
      height: ganttHeight,
    },
    // refs
    taskListRef,
  };

  return (
    // ROOT
    <div>
      {/* BODY */}
      <div className="roadmap" style={bodyStyle} tabIndex={0} ref={wrapperRef}>
        {/* TASK LIST */}
        {listCellWidth && <TaskList {...taskListProps} />}

        {/* GANTT TASK */}
        <RoadMapTask
          barProps={barProps}
          gridProps={gridProps}
          calendarProps={calendarProps}
          ganttHeight={ganttHeight}
          scrollX={scrollX}
          scrollY={scrollY}
        />

        {/* TOOLTIP */}
        {ganttEvent.changedTask && (
          <Tooltip
            rowHeight={rowHeight}
            svgContainerHeight={svgContainerHeight}
            svgContainerWidth={svgContainerWidth}
            scrollX={scrollX}
            scrollY={scrollY}
            task={ganttEvent.changedTask}
            headerHeight={headerHeight}
            taskListWidth={taskListWidth}
            rtl={rtl}
          >
            <TooltipContent task={ganttEvent.changedTask} />
          </Tooltip>
        )}

        {/* VERTICAL SCROLL */}
        <VerticalScroll
          scroll={scrollY}
          onScroll={handleScrollY}
          // style
          rootStyle={{
            height: ganttHeight,
            marginTop: headerHeight,
            marginLeft: rtl ? '' : '-17px',
          }}
          bodyStyle={{
            height: ganttFullHeight,
          }}
        />
      </div>

      {/* HORIZONTAL SCROLL */}
      <HorizontalScroll
        scroll={scrollX}
        onScroll={handleScrollX}
        // style
        rootStyle={{
          margin: rtl
            ? `0px ${taskListWidth}px 0px 0px`
            : `0px 0px 0px ${taskListWidth}px`,
        }}
        bodyStyle={{
          width: svgWidth,
        }}
      />
    </div>
  );
};
