// *** OTHER ***
import { CSSProperties } from 'react';

import './CalendarHeader.scss'

// *** TYPES ***
export type CalendarHeaderProps = {
  value: string;
  x1Line: number;
  y1Line: number;
  y2Line: number;
  xText: number;
  yText: number;
  rootStyle?: CSSProperties;
  lineStyle?: CSSProperties;
  textStyle?: CSSProperties;
};

export const CalendarHeader = (props: CalendarHeaderProps): JSX.Element => {
  // *** PROPS ***
  const {
    value,
    x1Line,
    xText,
    y1Line,
    y2Line,
    yText,
    // styles
    rootStyle,
    lineStyle,
    textStyle,
  } = props;

  return (
    <g style={rootStyle} className="calendar__header-root">
      {/* LINE */}
      <line
        className="calendar__header-line"
        style={lineStyle}
        key={value + 'line'}
        x1={x1Line}
        y1={y1Line}
        x2={x1Line}
        y2={y2Line}
      />

      {/* TEXT */}
      <text className="calendar__header-text" style={textStyle} key={value + 'text'} y={yText} x={xText}>
        {value}
      </text>
    </g>
  );
};
