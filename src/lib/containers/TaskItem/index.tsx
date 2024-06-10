// *** NPM ***
import React, { useEffect, useRef, useState } from 'react';

// *** OTHER ***
import { BarTask } from '../../types/bar-task';
import { Project } from '../Bars/Project';
import { GanttContentMoveAction } from '../../types/gantt-task-actions';
import { BarOriginal } from '../Bars';
import { BarSmall } from '../Bars/Bar/BarSmall';

import './TaskItem.scss'

// *** TYPES ***
export type TaskItemProps = {
  task: BarTask;
  taskHeight: number;
  isDateChangeable: boolean;
  isDelete: boolean;
  isSelected: boolean;
  rtl: boolean;
  onEventStart: (
    action: GanttContentMoveAction,
    selectedTask: BarTask,
    event?: React.MouseEvent | React.KeyboardEvent,
  ) => any;
};

export const TaskItem = (props: TaskItemProps) => {
  // *** PROPS ***
  const {
    task,
    rtl,
    isDateChangeable,
    isDelete,
    isSelected,
    taskHeight,
    onEventStart,
  } = props;

  // *** USE STATE ***
  const [taskItem, setTaskItem] = useState<JSX.Element>(<div />);
  const [isTextInside, setIsTextInside] = useState(true);

  // *** USE REF ***
  const textRef = useRef<SVGTextElement>(null);

  // *** HANDLERS ***
  const getX = () => {
    const width = task.x2 - task.x1;
    if (isTextInside) {
      return task.x1 + width * 0.5;
    }
    if (rtl && textRef.current) {
      return (
        task.x1 -
        textRef.current.getBBox().width
      );
    } else {
      return task.x1 + width + 10;
    }
  };

  // *** USE EFFECT ***
  useEffect(() => {
    switch (task.typeInternal) {
      case 'project':
        setTaskItem(
          <Project
            task={task}
            // style
            backgroundStyle={{
              fill: task.styles.backgroundColor,
              opacity: 1,
            }}
          />,
        );
        break;
      case 'smalltask':
        setTaskItem(<BarSmall {...props} />);
        break;
      default:
        setTaskItem(() => (
          <BarOriginal
            task={task}
            rtl={rtl}
            backgroundColor={task.styles.backgroundColor}
            isDateChangeable={isDateChangeable}
            onEventStart={onEventStart}
          />
        ));
        break;
    }
  }, [task, isSelected]);

  useEffect(() => {
    if (textRef.current) {
      setIsTextInside(textRef.current.getBBox().width < task.x2 - task.x1);
    }
  }, [textRef, task]);

  return (
    <svg>
      <g
        onKeyDown={(e) => {
          switch (e.key) {
            case 'Delete': {
              if (isDelete) onEventStart('delete', task, e);
              break;
            }
          }
          e.stopPropagation();
        }}
        onMouseEnter={(e) => {
          onEventStart('mouseenter', task, e);
        }}
        onMouseLeave={(e) => {
          onEventStart('mouseleave', task, e);
        }}
        onDoubleClick={(e) => {
          onEventStart('dblclick', task, e);
        }}
        onFocus={() => {
          onEventStart('select', task);
        }}
      >
        {/* TASK ITEM */}
        {taskItem}

        {/* TASK ITEM TEXT */}
        <text
          className={isTextInside ? 'taskitem-text' : 'taskitem-text__outside'}
          dominantBaseline="central"
          x={getX()}
          y={task.y + taskHeight * 0.5}
          ref={textRef}
        >
          {task.name}
        </text>
      </g>
    </svg>
  );
};

