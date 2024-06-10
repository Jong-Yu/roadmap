import { default as React } from 'react';
import { Column } from '../../../../types';

export interface TaskListHeaderProps {
    columns: Column[];
    rootStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    columnStyle?: React.CSSProperties;
    columnSeparatorStyle?: React.CSSProperties;
}
export declare const TaskListHeader: (props: TaskListHeaderProps) => import("react/jsx-runtime").JSX.Element;
