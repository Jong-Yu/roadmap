
export type BarDateHandleProps = {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    barCornerRadius?: number;
    onMouseDown?: (event: React.MouseEvent<SVGRectElement, MouseEvent>) => void;
};
export declare const BarDateHandle: ({ x, y, width, height, barCornerRadius, onMouseDown, }: BarDateHandleProps) => import("react/jsx-runtime").JSX.Element;
