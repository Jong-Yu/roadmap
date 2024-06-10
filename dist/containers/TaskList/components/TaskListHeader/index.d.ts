import { default as React } from 'react';

export interface TaskListHeaderProps {
    columns?: (JSX.Element | string)[];
    rootStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    columnStyle?: React.CSSProperties;
    columnSeparatorStyle?: React.CSSProperties;
}
export declare const TaskListHeader: (props: TaskListHeaderProps) => import("react/jsx-runtime").JSX.Element;
