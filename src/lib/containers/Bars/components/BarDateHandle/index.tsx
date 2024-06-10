import './BarDateHandle.scss';

// *** TYPES ***
export type BarDateHandleProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  barCornerRadius?: number;
  onMouseDown?: (event: React.MouseEvent<SVGRectElement, MouseEvent>) => void;
};

export const BarDateHandle = ({
  x = 0,
  y = 0,
  width = 10,
  height = 30,
  barCornerRadius = 5,
  onMouseDown,
}: BarDateHandleProps) => {
  return (
    <rect
      className="bar-date-handle"
      x={x}
      y={y}
      width={width}
      height={height}
      ry={barCornerRadius}
      rx={barCornerRadius}
      onMouseDown={onMouseDown}
    />
  );
};
