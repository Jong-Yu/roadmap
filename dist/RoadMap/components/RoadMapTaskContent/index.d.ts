import { default as React } from 'react';
import { EventOption } from '../../../types/public-types';
import { BarTask } from '../../../types/bar-task';
import { GanttEvent } from '../../../types/gantt-task-actions';

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
export declare const RoadMapTaskContent: (props: RoadMapTaskContentProps) => import("react/jsx-runtime").JSX.Element;
