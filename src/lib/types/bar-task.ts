import { Task, TaskType } from './public-types';

// type PickTask = Pick<
//   Task,
//   | 'line'
//   | 'id'
//   | 'type'
//   | 'name'
//   | 'start'
//   | 'end'
//   | 'styles'
//   | 'isDisabled'
//   | 'project'
//   | 'expanded'
// >;

export interface BarTask extends Task {
  index: number;
  typeInternal: TaskTypeInternal;
  x1: number;
  x2: number;
  y: number;
  height: number;
  barCornerRadius: number;
  handleWidth: number;
  barChildren: BarTask[];
  styles: {
    backgroundColor: string;
  };
}

export type TaskTypeInternal = TaskType | 'smalltask';
