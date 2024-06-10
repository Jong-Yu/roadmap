import { BarTask } from '../../types/bar-task';

export type TooltipProps = {
    task: BarTask;
    rtl: boolean;
    children: JSX.Element | string;
    scrollX: number;
    scrollY: number;
    svgContainerHeight: number;
    svgContainerWidth: number;
    headerHeight: number;
    rowHeight: number;
    taskListWidth: number;
    multiBarRowMode?: boolean;
};
export declare const Tooltip: ({ task, rtl, children, scrollX, scrollY, svgContainerHeight, svgContainerWidth, headerHeight, rowHeight, taskListWidth, multiBarRowMode, }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
