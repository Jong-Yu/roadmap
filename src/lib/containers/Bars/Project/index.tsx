// *** OTHER ***
import { CSSProperties } from "react";
import { TaskItemProps } from "../../TaskItem";
import './Project.scss'

// *** TYPES ***
export type ProjectProps = Pick<TaskItemProps, "task"> & {
	rootStyle?: CSSProperties;
	backgroundStyle?: CSSProperties;
};

export const Project = (props: ProjectProps) => {
	// *** PROPS ***
	const {
		task,
		rootStyle,
		backgroundStyle,
	} = props;

	return (
		<svg>
			<g tabIndex={0} className="project-root" style={rootStyle}>
				<rect
					className="project-bg"
					style={backgroundStyle}
					x={task.x1}
					y={task.y}
					height={task.height}
					width={task.x2 - task.x1}
					rx={task.barCornerRadius}
					ry={task.barCornerRadius}
				/>
			</g>
		</svg>
	);
};
