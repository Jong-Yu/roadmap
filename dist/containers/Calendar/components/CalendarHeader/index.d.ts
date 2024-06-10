import { CSSProperties } from 'react';

export type CalendarHeaderProps = {
    value: string;
    x1Line: number;
    y1Line: number;
    y2Line: number;
    xText: number;
    yText: number;
    rootStyle?: CSSProperties;
    lineStyle?: CSSProperties;
    textStyle?: CSSProperties;
};
export declare const CalendarHeader: (props: CalendarHeaderProps) => JSX.Element;
