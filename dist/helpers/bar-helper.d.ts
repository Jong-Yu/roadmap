import { Task } from '../types/public-types';
import { BarTask } from '../types/bar-task';
import { BarMoveAction } from '../types/gantt-task-actions';

export interface IConvertToBarTasksArgs {
    tasks: Task[];
    dates: Date[];
    rtl: boolean;
    multiBarRowMode?: boolean;
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
export declare const convertToBarTasks: (args: IConvertToBarTasksArgs, conversion?: (args: IConvertToBarTaskArgs, projectIndex: number) => BarTask) => BarTask[];
export declare const convertToBarTask: (args: IConvertToBarTaskArgs, projectIndex: number) => BarTask;
export declare const convertToBar: (args: IConvertToBarTaskArgs) => BarTask;
export declare const convertToProject: (args: IConvertToBarTaskArgs) => BarTask;
export declare const progressWithByParams: (taskX1: number, taskX2: number, rtl: boolean) => number[];
export declare const progressByProgressWidth: (progressWidth: number, barTask: BarTask) => number;
export declare const getProgressPoint: (progressX: number, taskY: number, taskHeight: number) => string;
/**
 * Method handles event in real time(mousemove) and on finish(mouseup)
 */
export declare const handleTaskBySVGMouseEvent: (svgX: number, action: BarMoveAction, selectedTask: BarTask, xStep: number, timeStep: number, initEventX1Delta: number, rtl: boolean) => {
    isChanged: boolean;
    changedTask: BarTask;
};
