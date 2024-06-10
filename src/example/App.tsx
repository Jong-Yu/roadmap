// *** NPM ***
import React from 'react';
import { RoadMap, Task, ViewMode, defaultRoadMapProps } from '../lib';

// *** OTHER ***
import ViewSwitcher from './components/ViewSwitcher';
import { getStartEndDateForProject, initTasks } from './helpers';

const App = () => {
  // *** USE STATE ***
  const [tasks, setTasks] = React.useState<Task[]>(initTasks());
  const [view, setView] = React.useState<ViewMode>(ViewMode.Month);
  const [isChecked, setIsChecked] = React.useState(true);

  // *** CONSTANTS ***
  let columnWidth = 60;
  if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  // *** HANDLERS ***
  const handleTaskChange = (task: Task) => {
    let newTasks = tasks.map((t) => (t.id === task.id ? task : t));

    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project =
        newTasks[newTasks.findIndex((t) => t.id === task.project)];

      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map((t) =>
          t.id === task.project ? changedProject : t,
        );
      }
    }

    setTasks(() => newTasks);
  };

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm('Are you sure about ' + task.name + ' ?');
    if (conf) {
      setTasks(() => tasks.filter((t) => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => {
    console.log('On progress change Id:' + task.id);
    setTasks(() => tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const handleDblClick = (task: Task) => {
    console.log('On Double Click event Id:' + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + ' has ' + (isSelected ? 'selected' : 'unselected'));
  };

  const handleExpanderClick = (task: Task) => {
    console.log('On expander click Id:' + task.id);
    setTasks(() => tasks.map((t) => (t.id === task.id ? task : t)));
  };

  return (
    <div>
      <ViewSwitcher
        onViewModeChange={(viewMode) => setView(() => viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
      />

      <RoadMap
        {...defaultRoadMapProps}
        tasks={tasks}
        viewMode={view}
        // handlers
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        // styles
        // listCellWidth={isChecked ? '155px' : ''}
        columnWidth={columnWidth}
      />
    </div>
  );
};

export default App;
