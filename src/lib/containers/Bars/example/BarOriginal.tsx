// *** NPM ***
import React, { useState } from 'react';

// *** OTHER ***
import { Bar } from '../Bar';
import { BarDateHandle } from '../components/BarDateHandle';
import { BarTask } from '../../../types/bar-task';
import { GanttContentMoveAction } from '../../../types/gantt-task-actions';
import { BarDisplay } from '../components/BarDisplay';

// *** TYPES ***
export interface IProps {
  task: BarTask;
  rtl: boolean;
  isDateChangeable: boolean;
  backgroundColor: string;
  onEventStart: (
    action: GanttContentMoveAction,
    selectedTask: BarTask,
    event?: React.MouseEvent | React.KeyboardEvent,
  ) => any;
}

const BarOriginal = (props: IProps) => {
  // *** PROPS ***
  const { task, rtl, isDateChangeable, backgroundColor, onEventStart } = props;

  // *** USE STATE ***
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // *** CONDITIONALS ***
  // bar display
  const barDisplay = (
    <BarDisplay
      x={task.x1}
      y={task.y}
      barCornerRadius={task.barCornerRadius}
      onMouseDown={(e: React.MouseEvent<Element, MouseEvent>) => {
        isDateChangeable === true && onEventStart('move', task, e);
      }}
      // style
      rootStyle={{
        height: task.height,
      }}
      barStyle={{
        height: task.height,
        width: task.x2 - task.x1,
        fill: backgroundColor
      }}
    />
  );

  // left bar date handle
  const leftBarDateHandle = (
    <BarDateHandle
      x={task.x1 + 1}
      y={task.y + 1}
      width={task.handleWidth}
      height={task.height - 2}
      barCornerRadius={task.barCornerRadius}
      onMouseDown={(e) => onEventStart('start', task, e)}
    />
  );

  // right bar date handle
  const rightBarDateHandle = (
    <BarDateHandle
      x={task.x2 - task.handleWidth - 1}
      y={task.y + 1}
      height={task.height - 2}
      width={task.handleWidth}
      barCornerRadius={task.barCornerRadius}
      onMouseDown={(e) => onEventStart('end', task, e)}
    />
  );

  return (
    <svg style={{ overflow: 'visible' }} className="original">
      <Bar
        rtl={rtl}
        className={isHovered ? 'hovered' : ''}
        isDateChangeable={isDateChangeable}
        // components
        barDisplay={barDisplay}
        leftBarDateHandle={leftBarDateHandle}
        rightBarDateHandle={rightBarDateHandle}
        // handlers
        onMouseEnter={() => setIsHovered(() => true)}
        onMouseLeave={() => setIsHovered(() => false)}
      />
    </svg>
  );
};

export default BarOriginal;
