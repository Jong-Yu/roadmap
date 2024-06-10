import { ReactNode } from 'react';
import { Column, Task } from '../../../../types/public-types';

export interface TaskListTableProps {
    tasks: Task[];
    columns: Column[];
    expanderSymbolOpen?: ReactNode;
    expanderSymbolClose?: ReactNode;
    expanderSymbolEmpty?: ReactNode;
    onExpanderClick: (task: Task) => void;
}
export declare const TaskListTable: (props: TaskListTableProps) => import("react/jsx-runtime").JSX.Element;
