// *** NPM ***
import React, { useEffect, useState } from 'react';

// *** OTHER ***
import { EventOption } from '../../../types/public-types';
import { BarTask } from '../../../types/bar-task';
import { handleTaskBySVGMouseEvent } from '../../../helpers/bar-helper';
import { isKeyboardEvent } from '../../../helpers/other-helper';
import { TaskItem } from '../../../containers/TaskItem';
import {
  BarMoveAction,
  GanttContentMoveAction,
  GanttEvent,
} from '../../../types/gantt-task-actions';

// *** TYPES ***
export type RoadMapTaskContentProps = {
  tasks: BarTask[];
  dates: Date[];
  ganttEvent: GanttEvent;
  selectedTask: BarTask | undefined;
  rowHeight: number;
  columnWidth: number;
  timeStep: number;
  svg?: React.RefObject<SVGSVGElement>;
  svgWidth: number;
  taskHeight: number;
  rtl: boolean;
  setGanttEvent: (value: GanttEvent) => void;
  setFailedTask: (value: BarTask | null) => void;
  setSelectedTask: (taskId: string) => void;
} & EventOption;

export const RoadMapTaskContent = (props: RoadMapTaskContentProps) => {
  // *** PROPS ***
  const {
    tasks,
    dates,
    ganttEvent,
    selectedTask,
    columnWidth,
    timeStep,
    svg,
    taskHeight,
    rtl,
    setGanttEvent,
    setFailedTask,
    setSelectedTask,
    onDateChange,
    onProgressChange,
    onDoubleClick,
    onDelete,
  } = props;

  // *** USE STATE ***
  const [xStep, setXStep] = useState(0);
  const [initEventX1Delta, setInitEventX1Delta] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  const point = svg?.current?.createSVGPoint();

  // *** HANDLERS ***
  const handleBarEventStart = async (
    action: GanttContentMoveAction,
    task: BarTask,
    event?: React.MouseEvent | React.KeyboardEvent,
  ) => {
    if (!event) {
      if (action === 'select') {
        setSelectedTask(task.id);
      }
    }
    // Keyboard events
    else if (isKeyboardEvent(event)) {
      if (action === 'delete') {
        if (onDelete) {
          try {
            const result = await onDelete(task);
            if (result !== undefined && result) {
              setGanttEvent({ action, changedTask: task });
            }
          } catch (error) {
            console.error('Error on Delete. ' + error);
          }
        }
      }
    }

    // Mouse Events
    else if (action === 'mouseenter') {
      if (!ganttEvent.action) {
        setGanttEvent({
          action,
          changedTask: task,
          originalSelectedTask: task,
        });
      }
    } else if (action === 'mouseleave') {
      if (ganttEvent.action === 'mouseenter') {
        setGanttEvent({ action: '' });
      }
    } else if (action === 'dblclick') {
      !!onDoubleClick && onDoubleClick(task);
    }

    // Change task event start
    else if (action === 'move') {
      if (!svg?.current || !point) return;
      point.x = event.clientX;
      const cursor = point.matrixTransform(
        svg.current.getScreenCTM()?.inverse(),
      );
      setInitEventX1Delta(cursor.x - task.x1);
      setGanttEvent({
        action,
        changedTask: task,
        originalSelectedTask: task,
      });
    } else {
      setGanttEvent({
        action,
        changedTask: task,
        originalSelectedTask: task,
      });
    }
  };

  // *** USE EFFECT ***
  useEffect(() => {
    const dateDelta =
      dates[1].getTime() -
      dates[0].getTime() -
      dates[1].getTimezoneOffset() * 60 * 1000 +
      dates[0].getTimezoneOffset() * 60 * 1000;
    const newXStep = (timeStep * columnWidth) / dateDelta;
    setXStep(newXStep);
  }, [columnWidth, dates, timeStep]);

  useEffect(() => {
    const handleMouseMove = async (event: MouseEvent) => {
      if (!ganttEvent.changedTask || !point || !svg?.current) return;
      event.preventDefault();

      point.x = event.clientX;
      const cursor = point.matrixTransform(
        svg?.current.getScreenCTM()?.inverse(),
      );

      const { isChanged, changedTask } = handleTaskBySVGMouseEvent(
        cursor.x,
        ganttEvent.action as BarMoveAction,
        ganttEvent.changedTask,
        xStep,
        timeStep,
        initEventX1Delta,
        rtl,
      );
      if (isChanged) {
        setGanttEvent({ action: ganttEvent.action, changedTask });
      }
    };

    const handleMouseUp = async (event: MouseEvent) => {
      const { action, originalSelectedTask, changedTask } = ganttEvent;
      if (!changedTask || !point || !svg?.current || !originalSelectedTask)
        return;
      event.preventDefault();

      point.x = event.clientX;
      const cursor = point.matrixTransform(
        svg?.current.getScreenCTM()?.inverse(),
      );
      const { changedTask: newChangedTask } = handleTaskBySVGMouseEvent(
        cursor.x,
        action as BarMoveAction,
        changedTask,
        xStep,
        timeStep,
        initEventX1Delta,
        rtl,
      );

      const isNotLikeOriginal =
        originalSelectedTask.start !== newChangedTask.start ||
        originalSelectedTask.end !== newChangedTask.end ||
        originalSelectedTask.progress !== newChangedTask.progress;

      // remove listeners
      svg.current.removeEventListener('mousemove', handleMouseMove);
      svg.current.removeEventListener('mouseup', handleMouseUp);
      setGanttEvent({ action: '' });
      setIsMoving(false);

      // custom operation start
      let operationSuccess = true;
      if (
        (action === 'move' || action === 'end' || action === 'start') &&
        onDateChange &&
        isNotLikeOriginal
      ) {
        try {
          const result = await onDateChange(
            newChangedTask,
            newChangedTask.barChildren,
          );
          if (result !== undefined) {
            operationSuccess = result;
          }
        } catch (error) {
          operationSuccess = false;
        }
      } else if (onProgressChange && isNotLikeOriginal) {
        try {
          const result = await onProgressChange(
            newChangedTask,
            newChangedTask.barChildren,
          );
          if (result !== undefined) {
            operationSuccess = result;
          }
        } catch (error) {
          operationSuccess = false;
        }
      }

      // If operation is failed - return old state
      if (!operationSuccess) {
        setFailedTask(originalSelectedTask);
      }
    };

    if (
      !isMoving &&
      (ganttEvent.action === 'move' ||
        ganttEvent.action === 'end' ||
        ganttEvent.action === 'start' ||
        ganttEvent.action === 'progress') &&
      svg?.current
    ) {
      svg.current.addEventListener('mousemove', handleMouseMove);
      svg.current.addEventListener('mouseup', handleMouseUp);
      setIsMoving(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    ganttEvent,
    xStep,
    initEventX1Delta,
    onProgressChange,
    timeStep,
    onDateChange,
    svg,
    isMoving,
  ]);

  return (
    <g className="content">
      <g className="bar">
        {tasks.map((task) => {
          return (
            <TaskItem
              task={task}
              taskHeight={taskHeight}
              isDateChangeable={!!onDateChange && !task.isDisabled}
              isDelete={!task.isDisabled}
              onEventStart={handleBarEventStart}
              key={task.id}
              isSelected={!!selectedTask && task.id === selectedTask.id}
              rtl={rtl}
            />
          );
        })}
      </g>
    </g>
  );
};