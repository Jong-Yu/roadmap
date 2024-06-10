import { useRef, useEffect, useState } from 'react';
import { BarTask } from '../../types/bar-task';
import { cn } from '../../helpers';

import './Tooltip.scss';

export type TooltipProps = {
  task: BarTask;
  rtl: boolean;
  children: JSX.Element | string;
  scrollX: number;
  scrollY: number;
  svgContainerHeight: number;
  svgContainerWidth: number;
  headerHeight: number;
  rowHeight: number;
  taskListWidth: number;
  multiBarRowMode?: boolean;
};

export const Tooltip = ({
  task,
  rtl,
  children,
  scrollX,
  scrollY,
  svgContainerHeight,
  svgContainerWidth,
  headerHeight,
  rowHeight,
  taskListWidth,
  multiBarRowMode = false,
}: TooltipProps) => {
  // *** USE STATE ***
  const [relatedY, setRelatedY] = useState<number>(0);
  const [relatedX, setRelatedX] = useState<number>(0);

  // *** USE REF ***
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  // *** CHECKERS ***
  const isVisible: boolean = relatedX !== 0 && relatedY !== 0;

  // *** USE EFFECT ***
  useEffect(() => {
    if (tooltipRef.current) {
      const tooltipHeight = tooltipRef.current.offsetHeight * 1.1;
      const tooltipWidth = tooltipRef.current.offsetWidth * 1.1;
      const rowNumber =
        multiBarRowMode === true && typeof task.line !== 'undefined'
          ? task.line
          : task.index;

      let newRelatedY = rowNumber * rowHeight - scrollY + headerHeight;
      let newRelatedX: number;

      if (rtl) {
        newRelatedX = task.x1 - tooltipWidth - scrollX;

        if (newRelatedX < 0) {
          newRelatedX = task.x2 - scrollX;
        }

        const tooltipLeftmostPoint = tooltipWidth + newRelatedX;

        if (tooltipLeftmostPoint > svgContainerWidth) {
          newRelatedX = svgContainerWidth - tooltipWidth;
          newRelatedY += rowHeight;
        }
      } else {
        newRelatedX = task.x2 + taskListWidth - scrollX;
        const tooltipLeftmostPoint = tooltipWidth + newRelatedX;
        const fullChartWidth = taskListWidth + svgContainerWidth;

        if (tooltipLeftmostPoint > fullChartWidth) {
          newRelatedX = task.x1 + taskListWidth - scrollX - tooltipWidth;
        }

        if (newRelatedX < taskListWidth) {
          newRelatedX = svgContainerWidth + taskListWidth - tooltipWidth;
          newRelatedY += rowHeight;
        }
      }

      const tooltipLowerPoint = tooltipHeight + newRelatedY - scrollY;

      if (tooltipLowerPoint > svgContainerHeight - scrollY) {
        newRelatedY = svgContainerHeight - tooltipHeight;
      }

      setRelatedY(newRelatedY);
      setRelatedX(newRelatedX + 50);
    }
  }, [
    task,
    scrollX,
    scrollY,
    headerHeight,
    taskListWidth,
    rowHeight,
    svgContainerHeight,
    svgContainerWidth,
    rtl,
    multiBarRowMode,
  ]);

  return (
    <div
      ref={tooltipRef}
      className={cn('tooltip-wrap', isVisible ? 'visible' : 'hidden')}
      style={{
        left: relatedX,
        top: relatedY,
      }}
    >
      {children}
    </div>
  );
};
