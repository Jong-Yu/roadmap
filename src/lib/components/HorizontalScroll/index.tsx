import { SyntheticEvent, useRef, useEffect, CSSProperties } from 'react';
import './HorizontalScroll.scss';

export interface HorizontalScrollProps {
  scroll: number;
  rootStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  onScroll: (event: SyntheticEvent<HTMLDivElement>) => void;
}

export const HorizontalScroll = ({
  scroll,
  rootStyle,
  bodyStyle,
  onScroll,
}: HorizontalScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scroll;
    }
  }, [scroll]);

  return (
    <div
      ref={scrollRef}
      dir="ltr"
      className="horizontal-scroll-root"
      style={rootStyle}
      onScroll={onScroll}
    >
      <div className="horizontal-scroll-body" style={bodyStyle} />
    </div>
  );
};
