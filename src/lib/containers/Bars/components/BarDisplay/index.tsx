import { CSSProperties } from 'react';
import './BarDisplay.scss';

// *** TYPES ***
export interface BarDisplayProps {
  x?: number;
  y?: number;
  barCornerRadius?: number;
  onMouseDown?: (
    event: React.MouseEvent<SVGPolygonElement, MouseEvent>,
  ) => void;
  rootStyle?: CSSProperties;
  barStyle?: CSSProperties;
}

export const BarDisplay = ({
  x = 0,
  y = 0,
  barCornerRadius = 5,
  rootStyle,
  barStyle,
  onMouseDown,
}: BarDisplayProps) => {
  return (
    <g className="bar-display-root" onMouseDown={onMouseDown} style={rootStyle}>
      <rect
        className="bar-display-bar"
        style={barStyle}
        x={x}
        y={y}
        rx={barCornerRadius}
        ry={barCornerRadius}
      />
    </g>
  );
};
