import { TaskItemProps } from '../../TaskItem';

export type BarSmallProps = {
    rootStyle?: React.CSSProperties;
} & Pick<TaskItemProps, 'task' | 'isDateChangeable' | 'onEventStart'>;
export declare const BarSmall: (props: BarSmallProps) => import("react/jsx-runtime").JSX.Element;
