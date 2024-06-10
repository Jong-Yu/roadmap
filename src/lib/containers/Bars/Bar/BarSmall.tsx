// *** OTHER ***
import { BarDisplay } from '../components/BarDisplay';
import { TaskItemProps } from '../../TaskItem';
import './Bar.scss';

// *** TYPES ***
export type BarSmallProps = {
  rootStyle?: React.CSSProperties;
} & Pick<TaskItemProps, 'task' | 'isDateChangeable' | 'onEventStart'>;

// TODO: Move BarDisplay and BarProgressHandle to props. I believe it'd be better for customization.
export const BarSmall = (props: BarSmallProps) => {
  // *** PROPS ***
  const { rootStyle, task, isDateChangeable, onEventStart } = props;

  return (
    <g className="bar" tabIndex={0} style={rootStyle}>
      <BarDisplay
        x={task.x1}
        y={task.y}
        barCornerRadius={task.barCornerRadius}
        onMouseDown={(e) => {
          isDateChangeable === true && onEventStart('move', task, e);
        }}
        // style
        rootStyle={{
          height: task.height,
        }}
        barStyle={{
          height: task.height,
          fill: task.styles.backgroundColor,
          width: task.x2 - task.x1,
        }}
      />
    </g>
  );
};
