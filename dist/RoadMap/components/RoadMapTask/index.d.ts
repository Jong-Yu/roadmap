import { GridProps } from '../../../containers/Grid/Grid';
import { CalendarProps } from '../../../containers/Calendar/Calendar';
import { RoadMapTaskContentProps } from '../RoadMapTaskContent';

export type RoadMapTaskProps = {
    gridProps: GridProps;
    calendarProps: CalendarProps;
    barProps: RoadMapTaskContentProps;
    ganttHeight: number;
    scrollX: number;
    scrollY: number;
};
export declare const RoadMapTask: (props: RoadMapTaskProps) => import("react/jsx-runtime").JSX.Element;
