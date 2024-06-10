import { ReactNode } from 'react';
import { cn } from '../../../../helpers';
import { Column, Task } from '../../../../types/public-types';
import './TaskListTable.scss';

export interface TaskListTableProps {
  tasks: Task[];
  columns: Column[];
  expanderSymbolOpen?: ReactNode;
  expanderSymbolClose?: ReactNode;
  expanderSymbolEmpty?: ReactNode;
  onExpanderClick: (task: Task) => void;
}

export const TaskListTable = (props: TaskListTableProps) => {
  // *** PROPS ***
  const {
    tasks,
    columns,
    expanderSymbolOpen = '▼',
    expanderSymbolClose = '▶',
    expanderSymbolEmpty = '',
    onExpanderClick,
  } = props;

  return (
    // ROOT
    <div className="tasklist__table-root">
      {/* TABLE ROWS */}
      {tasks.map((t) => {
        // expander
        let expanderSymbol: ReactNode = expanderSymbolEmpty;

        if (t.expanded === true) {
          expanderSymbol = expanderSymbolClose;
        } else if (t.expanded === false) {
          expanderSymbol = expanderSymbolOpen;
        }

        return (
          // TABLE ROW
          <div
            className={cn(
              'tasklist__table-row',
              t.type === 'project' ? 'project' : 'task',
            )}
            key={`${t.id}row`}
          >
            {/* Colums CELL */}
            {columns.map((column, index) => {
              console.log(column.id, t[column.id]);

              if (index === 0) {
                return (
                  // First Column
                  <div
                    className={cn(
                      'tasklist__table-cell',
                      t.type === 'project' ? 'project' : 'task',
                    )}
                    title={t.name}
                    style={{ width: column.width }}
                  >
                    {/* TABLE CELL WRAPPER */}
                    <div
                      className="tasklist__table-cell__wrapper"
                      onClick={() => onExpanderClick(t)}
                    >
                      {/* EXPANDER */}
                      <div
                        className={
                          expanderSymbol
                            ? 'tasklist__table-expander'
                            : 'tasklist__table-expander__empty'
                        }
                      >
                        {expanderSymbol}
                      </div>

                      {/* TEXT */}
                      <div>{t.name}</div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className={cn('tasklist__table-cell')}
                    title={column.name}
                  >
                    <div style={{ width: column.width || '150px' }}>
                      {column.cell
                        ? column.cell(t)
                        : t[column.id]?.toString() || ''}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};
