import { default as React } from 'react';
import { BarTask } from '../../../types/bar-task';
import { GanttContentMoveAction } from '../../../types/gantt-task-actions';

export interface IProps {
    task: BarTask;
    rtl: boolean;
    isDateChangeable: boolean;
    backgroundColor: string;
    onEventStart: (action: GanttContentMoveAction, selectedTask: BarTask, event?: React.MouseEvent | React.KeyboardEvent) => any;
}
declare const BarOriginal: (props: IProps) => import("react/jsx-runtime").JSX.Element;
export default BarOriginal;
