// *** NPM ***
import { useRef, useEffect } from "react";

// *** OTHER ***
import { Grid, GridProps } from "../../../containers/Grid/Grid";
import {
	Calendar, CalendarProps,
} from "../../../containers/Calendar/Calendar";
import {
	RoadMapTaskContent,
	RoadMapTaskContentProps,
} from "../RoadMapTaskContent";

import './RoadMapTask.scss'

// *** TYPES ***
export type RoadMapTaskProps = {
	gridProps: GridProps;
	calendarProps: CalendarProps;
	barProps: RoadMapTaskContentProps;
	ganttHeight: number;
	scrollX: number;
	scrollY: number;
};

export const RoadMapTask = (props: RoadMapTaskProps) => {
	// *** PROPS ***
	const {
		gridProps,
		calendarProps,
		barProps,
		ganttHeight,
		scrollY,
		scrollX,
	} = props;

	// *** USE REF ***
	const ganttSVGRef = useRef<SVGSVGElement>(null);
	const horizontalContainerRef = useRef<HTMLDivElement>(null);
	const verticalGanttContainerRef = useRef<HTMLDivElement>(null);

	// *** USE EFFECT ***
	useEffect(() => {
		if (horizontalContainerRef.current) {
			horizontalContainerRef.current.scrollTop = scrollY;
		}
	}, [scrollY]);

	useEffect(() => {
		if (verticalGanttContainerRef.current) {
			verticalGanttContainerRef.current.scrollLeft = scrollX;
		}
	}, [scrollX]);

	// *** CONDITIONALS ***
	const newBarProps = { ...barProps, svg: ganttSVGRef };

	return (
		// ROOT
		<div className="roadmap__task-root" ref={verticalGanttContainerRef} dir="ltr">
			{/* CALENDAR */}
			<svg
				height={calendarProps.headerHeight}
				width={gridProps.svgWidth}
				xmlns="http://www.w3.org/2000/svg"
			>
				<Calendar {...calendarProps} />
			</svg>

			{/* CONTENT */}
			<div
				ref={horizontalContainerRef}
				className="roadmap__task-content"
				style={{
					height: ganttHeight || undefined,
					width: gridProps.svgWidth,
				}}
			>
				<svg
					ref={ganttSVGRef}
					height={barProps.rowHeight * barProps.tasks.length}
					width={gridProps.svgWidth}
					xmlns="http://www.w3.org/2000/svg"
				>
					<Grid {...gridProps} />

					<RoadMapTaskContent {...newBarProps} />
				</svg>
			</div>
		</div>
	);
};