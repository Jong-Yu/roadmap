import { default as React } from 'react';
import { BarTask } from '../../types/bar-task';
import { GanttContentMoveAction } from '../../types/gantt-task-actions';

export type TaskItemProps = {
    task: BarTask;
    taskHeight: number;
    isDateChangeable: boolean;
    isDelete: boolean;
    isSelected: boolean;
    rtl: boolean;
    onEventStart: (action: GanttContentMoveAction, selectedTask: BarTask, event?: React.MouseEvent | React.KeyboardEvent) => any;
};
export declare const TaskItem: (props: TaskItemProps) => import("react/jsx-runtime").JSX.Element;
