import { Task } from '../../../types';
import './TooltipContnet.scss';

export interface TooltipContentProps {
  task: Task;
}

export const TooltipContent = ({ task }: TooltipContentProps) => {
  return (
    <div className="tootip-content">
      {/* DATES RANGE */}
      <b className="dates-range">{`${task.name}: ${task.start.getFullYear()}-${
        task.start.getMonth() + 1
      }-${task.start.getDate()} ~ ${task.end.getFullYear()}-${
        task.end.getMonth() + 1
      }-${task.end.getDate()}`}</b>

      {/* DURATION */}
      {task.end.getTime() - task.start.getTime() !== 0 && (
        <p className="duration">{`기간: ${~~(
          (task.end.getTime() - task.start.getTime()) /
          (1000 * 60 * 60 * 24)
        )} 일`}</p>
      )}
    </div>
  );
};
