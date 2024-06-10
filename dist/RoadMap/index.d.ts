import { default as React } from 'react';
import { Task, EventOption, DisplayOption, StylingOption } from '../types/public-types';
import { OptionalKeys } from '../types/custom';

export type RoadMapProps = Partial<EventOption> & Partial<DisplayOption> & Partial<StylingOption> & {
    tasks: Task[];
    bodyStyle?: React.CSSProperties;
};
type TOptionalPropsKeys = Exclude<OptionalKeys<RoadMapProps>, undefined>;
type TOptionalProps = Required<Pick<RoadMapProps, TOptionalPropsKeys>>;
export declare const defaultRoadMapProps: TOptionalProps;
export declare const RoadMap: (props: RoadMapProps & typeof defaultRoadMapProps) => import("react/jsx-runtime").JSX.Element;
export {};
