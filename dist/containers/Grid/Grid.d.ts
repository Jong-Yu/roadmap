import { default as React } from 'react';
import { Task } from '../../types/public-types';

export type GridProps = {
    tasks: Task[];
    dates: Date[];
    svgWidth: number;
    rowHeight: number;
    columnWidth: number;
    todayColor: string;
    rtl: boolean;
    gridRowStyle?: React.CSSProperties;
    gridRowLineStyle?: React.CSSProperties;
    gridTickStyle?: React.CSSProperties;
};
export declare const Grid: (props: GridProps) => import("react/jsx-runtime").JSX.Element;
