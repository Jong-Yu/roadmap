// *** NPM ***
import React, { ReactNode } from 'react';
import './TaskListHeader.scss';
import { Column } from '../../../../types';

// *** TYPES ***
export interface TaskListHeaderProps {
  columns: Column[];
  // style
  rootStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  columnStyle?: React.CSSProperties;
  columnSeparatorStyle?: React.CSSProperties;
}

export const TaskListHeader = (props: TaskListHeaderProps) => {
  // *** PROPS ***
  const {
    columns,
    // style
    rootStyle,
    headerStyle,
    columnStyle,
    columnSeparatorStyle,
  } = props;

  // *** CONDITIONALS ***
  const headerBody: ReactNode[] = [];
  columns.forEach((column, index) => {
    const columnElement = (
      <React.Fragment key={index}>
        {/* COLUMN */}
        <div
          className="tasklist__header-column"
          style={{ ...columnStyle, width: `${column.width}px` }}
        >
          {column.name}
        </div>

        {/* SEPARATOR */}
        {index !== columns.length - 1 && (
          <div
            className="tasklist__header-comumn__sep"
            style={columnSeparatorStyle}
          />
        )}
      </React.Fragment>
    );

    headerBody.push(columnElement);
  });

  return (
    // ROOT
    <div className="tasklist__header-root" style={rootStyle}>
      {/* HEADER */}
      <div className="tasklist__header-header" style={headerStyle}>
        {/* BODY */}
        {headerBody}
      </div>
    </div>
  );
};
