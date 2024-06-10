import { default as React } from 'react';
import { TaskListTable, TaskListTableProps } from './components/TaskListTable';
import { TaskListHeader, TaskListHeaderProps } from './components/TaskListHeader';

export type TaskListProps = {
    scrollY: number;
    TaskListHeader: typeof TaskListHeader;
    TaskListTable: typeof TaskListTable;
    taskListHeaderProps: TaskListHeaderProps;
    taskListTableProps: TaskListTableProps;
    taskListTableWrapperStyles?: React.CSSProperties;
    taskListRef: React.RefObject<HTMLDivElement>;
};
declare const TaskList: (props: TaskListProps) => import("react/jsx-runtime").JSX.Element;
export default TaskList;
