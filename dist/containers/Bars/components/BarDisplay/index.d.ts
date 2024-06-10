import { CSSProperties } from 'react';

export interface BarDisplayProps {
    x?: number;
    y?: number;
    barCornerRadius?: number;
    onMouseDown?: (event: React.MouseEvent<SVGPolygonElement, MouseEvent>) => void;
    rootStyle?: CSSProperties;
    barStyle?: CSSProperties;
}
export declare const BarDisplay: ({ x, y, barCornerRadius, rootStyle, barStyle, onMouseDown, }: BarDisplayProps) => import("react/jsx-runtime").JSX.Element;
