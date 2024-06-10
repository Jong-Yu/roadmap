// *** NPM ***
import React, { useEffect, useRef } from 'react';

import {
  TaskListTable,
  TaskListTableProps,
} from './components/TaskListTable';
import {
  TaskListHeader,
  TaskListHeaderProps,
} from './components/TaskListHeader';

import './TaskList.scss'

// *** TYPES ***
export type TaskListProps = {
  scrollY: number;
  // components
  TaskListHeader: typeof TaskListHeader;
  TaskListTable: typeof TaskListTable;
  // components props
  taskListHeaderProps: TaskListHeaderProps;
  taskListTableProps: TaskListTableProps;
  // styles
  taskListTableWrapperStyles?: React.CSSProperties;
  // refs
  taskListRef: React.RefObject<HTMLDivElement>;
};

const TaskList = (props: TaskListProps) => {
  // *** PROPS ***
  const {
    scrollY,
    // components
    TaskListHeader,
    TaskListTable,
    // components props
    taskListHeaderProps,
    taskListTableProps,
    // styles
    taskListTableWrapperStyles,
    // refs
    taskListRef,
  } = props;

  // *** USE REF ***
  const horizontalContainerRef = useRef<HTMLDivElement>(null);

  // *** USE EFFECT ***
  useEffect(() => {
    if (horizontalContainerRef.current) {
      horizontalContainerRef.current.scrollTop = scrollY;
    }
  }, [scrollY]);

  return (
    <div ref={taskListRef}>
      {/* HEADER */}
      <TaskListHeader {...taskListHeaderProps} />

      <div className="tasklist_wrapper" style={taskListTableWrapperStyles} ref={horizontalContainerRef}>
        {/* TABLE */}
        <TaskListTable {...taskListTableProps} />
      </div>
    </div>
  );
};

export default TaskList;
