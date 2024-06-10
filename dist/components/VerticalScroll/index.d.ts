import { SyntheticEvent, CSSProperties } from 'react';

export interface VerticalScrollProps {
    scroll: number;
    onScroll: (event: SyntheticEvent<HTMLDivElement>) => void;
    rootStyle?: CSSProperties;
    bodyStyle?: CSSProperties;
}
export declare const VerticalScroll: ({ scroll, rootStyle, bodyStyle, onScroll, }: VerticalScrollProps) => import("react/jsx-runtime").JSX.Element;
