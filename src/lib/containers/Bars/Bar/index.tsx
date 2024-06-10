import { CSSProperties, MouseEventHandler } from 'react';
// *** OTHER ***
import { TaskItemProps } from '../../TaskItem';
// *** STYLES ***
import { cn } from '../../../helpers';
import './Bar.scss';

// *** TYPES ***
export type BarProps = Pick<TaskItemProps, 'rtl' | 'isDateChangeable'> & {
  className?: string;
  // style
  rootStyle?: CSSProperties;
  // components
  barDisplay?: JSX.Element;
  leftBarDateHandle?: JSX.Element;
  rightBarDateHandle?: JSX.Element;
  // handlers
  onMouseEnter?: MouseEventHandler<SVGGElement>;
  onMouseLeave?: MouseEventHandler<SVGGElement>;
};

export const Bar = (props: BarProps) => {
  const {
    className,
    isDateChangeable,
    // style
    rootStyle,
    // components
    barDisplay,
    leftBarDateHandle,
    rightBarDateHandle,
    // handlers
    onMouseEnter,
    onMouseLeave,
  } = props;

  return (
    <g
      className={cn('bar', className)}
      style={rootStyle}
      tabIndex={0}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* BAR DISPLAY */}
      {barDisplay}

      {/* DATE HANDLES */}
      <g>
        {isDateChangeable === true && (
          // DATE HANDLES
          <g>
            {/* LEFT SIDE */}
            {leftBarDateHandle && leftBarDateHandle}

            {/* RIGHT SIDE */}
            {rightBarDateHandle && rightBarDateHandle}
          </g>
        )}
      </g>
    </g>
  );
};
