import { ReactNode } from 'react';
import { BarTask } from './bar-task';

export declare enum ViewMode {
    QuarterDay = "Quarter Day",
    HalfDay = "Half Day",
    Day = "Day",
    /** ISO-8601 week */
    Week = "Week",
    Month = "Month"
}
export type TaskType = 'task' | 'project';
export type styles = {
    backgroundColor?: string;
};
export interface Task {
    [key: string]: string | number | Date | boolean | undefined | styles | BarTask[];
    /**
     * By default all tasks shown by list index sequentially
     * So if you are going to use some other order or output multiple bars per row
     * You can define line number exactly and sequentially like so (0, 1, 2, 3, 3, 4, 5)
     */
    line?: number;
    id: string;
    type: TaskType;
    name: string;
    start: Date;
    end: Date;
    styles?: {
        backgroundColor?: string;
    };
    isDisabled?: boolean;
    project?: string;
    expanded?: boolean;
}
export interface EventOption {
    /**
     * Time step value for date changes.
     */
    timeStep?: number;
    /**
     * Invokes on bar select on unselect.
     */
    onSelect?: (task: Task, isSelected: boolean) => void;
    /**
     * Invokes on bar double click.
     */
    onDoubleClick?: (task: Task) => void;
    /**
     * Invokes on end and start time change. Chart undoes operation if method return false or error.
     */
    onDateChange?: (task: Task, children: Task[]) => void | boolean | Promise<void> | Promise<boolean>;
    /**
     * Invokes on progress change. Chart undoes operation if method return false or error.
     */
    onProgressChange?: (task: Task, children: Task[]) => void | boolean | Promise<void> | Promise<boolean>;
    /**
     * Invokes on delete selected task. Chart undoes operation if method return false or error.
     */
    onDelete?: (task: Task) => void | boolean | Promise<void> | Promise<boolean>;
    /**
     * Invokes on expander on task list
     */
    onExpanderClick?: (task: Task) => void;
}
export interface DisplayOption {
    viewMode?: ViewMode;
    locale?: string;
    rtl?: boolean;
}
export interface StylingOption {
    headerHeight?: number;
    columnWidth?: number;
    listCellWidth?: string;
    rowHeight?: number;
    ganttHeight?: number;
    barCornerRadius?: number;
    handleWidth?: number;
    barFill?: number;
    todayColor?: string;
    TooltipContent?: React.FC<{
        task: Task;
    }>;
}
export interface Column {
    id: string;
    name: string;
    width?: number;
    cell?: (task: Task) => ReactNode;
}
