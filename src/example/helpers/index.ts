import { Task } from '../../lib';

export const initTasks = (): Task[] => {
  const tasks: Task[] = [
    // Project 1
    {
      type: 'project',
      id: 'ProjectSample',
      name: '1.Project',
      start: new Date(2021, 6, 1),
      end: new Date(2021, 9, 30),
      progress: 25,
      expanded: true,
    },
    {
      type: 'task',
      id: 'Task 0',
      name: '1.1 Task',
      start: new Date(2021, 6, 1, 8),
      end: new Date(2021, 6, 1, 16),
      progress: 45,
      project: 'ProjectSample',
    },
    {
      type: 'task',
      id: 'Task 1',
      name: '1.2 Task',
      start: new Date(2021, 7, 1),
      end: new Date(2021, 7, 30),
      progress: 25,
      project: 'ProjectSample',
    },
    {
      type: 'task',
      id: 'Task 2',
      name: '1.3 Task',
      start: new Date(2021, 6, 1),
      end: new Date(2021, 7, 30),
      progress: 10,
      project: 'ProjectSample',
    },
    {
      type: 'task',
      id: 'Task 6',
      name: '1.3.1 task (KT)',
      start: new Date(2021, 6, 1),
      end: new Date(2021, 6, 30),
      progress: 100,
      project: 'ProjectSample',
    },
    {
      type: 'project',
      id: 'ProjectSample2',
      name: '1.3.2 project (KT)',
      start: new Date(2021, 8, 1),
      end: new Date(2021, 9, 30),
      progress: 100,
      expanded: false,
    },

    {
      type: 'task',
      id: 'Task 3',
      name: '1.4 Task',
      start: new Date(2021, 8, 1),
      end: new Date(2021, 8, 30),
      progress: 2,
      project: 'ProjectSample2',
    },
    {
      type: 'task',
      id: 'Task 4',
      name: '1.5 Task',
      start: new Date(2021, 9, 1),
      end: new Date(2021, 9, 30),
      progress: 70,
      project: 'ProjectSample2',
    },
    {
      type: 'task',
      id: 'Task 5',
      name: '1.5.1 task (KT)',
      start: new Date(2021, 9, 1),
      end: new Date(2021, 9, 30),
      progress: 100,
      project: 'ProjectSample',
    },
  ];
  return tasks;
};

export const getStartEndDateForProject = (
  tasks: Task[],
  projectId: string,
): [Date, Date] => {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
};
