import { SyntheticEvent, CSSProperties } from 'react';

export interface HorizontalScrollProps {
    scroll: number;
    rootStyle?: CSSProperties;
    bodyStyle?: CSSProperties;
    onScroll: (event: SyntheticEvent<HTMLDivElement>) => void;
}
export declare const HorizontalScroll: ({ scroll, rootStyle, bodyStyle, onScroll, }: HorizontalScrollProps) => import("react/jsx-runtime").JSX.Element;
