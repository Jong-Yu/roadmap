// *** NPM ***
import React from "react";
import './TaskListHeader.scss'

// *** TYPES ***
export interface TaskListHeaderProps {
	columns?: (JSX.Element | string)[];
	// style
	rootStyle?: React.CSSProperties;
	headerStyle?: React.CSSProperties;
	columnStyle?: React.CSSProperties;
	columnSeparatorStyle?: React.CSSProperties;
}


export const TaskListHeader = (props: TaskListHeaderProps) => {
	// *** PROPS ***
	const {
		columns = ["Name"],
		// style
		rootStyle,
		headerStyle,
		columnStyle,
		columnSeparatorStyle,
	} = props;

	// *** CONDITIONALS ***
	const headerBody: JSX.Element[] = [];
	columns.forEach((column, index) => {
		const columnElement = (
			<React.Fragment key={index}>
				{/* COLUMN */}
				<div className="tasklist__header-column" style={columnStyle}>{column}</div>

				{/* SEPARATOR */}
				{index !== columns.length - 1 && <div className="tasklist__header-comumn__sep" style={columnSeparatorStyle} />}
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