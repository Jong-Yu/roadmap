import { CSSProperties, MouseEventHandler } from 'react';
import { TaskItemProps } from '../../TaskItem';

export type BarProps = Pick<TaskItemProps, 'rtl' | 'isDateChangeable'> & {
    className?: string;
    rootStyle?: CSSProperties;
    barDisplay?: JSX.Element;
    leftBarDateHandle?: JSX.Element;
    rightBarDateHandle?: JSX.Element;
    onMouseEnter?: MouseEventHandler<SVGGElement>;
    onMouseLeave?: MouseEventHandler<SVGGElement>;
};
export declare const Bar: (props: BarProps) => import("react/jsx-runtime").JSX.Element;
