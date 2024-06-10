import { CSSProperties } from 'react';
import { TaskItemProps } from '../../TaskItem';

export type ProjectProps = Pick<TaskItemProps, "task"> & {
    rootStyle?: CSSProperties;
    backgroundStyle?: CSSProperties;
};
export declare const Project: (props: ProjectProps) => import("react/jsx-runtime").JSX.Element;
