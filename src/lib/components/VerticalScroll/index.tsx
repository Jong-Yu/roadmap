import { SyntheticEvent, useRef, useEffect, CSSProperties } from 'react';
import './VerticalScroll.scss';

export interface VerticalScrollProps {
  scroll: number;
  onScroll: (event: SyntheticEvent<HTMLDivElement>) => void;
  rootStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
}

export const VerticalScroll = ({
  scroll,
  rootStyle,
  bodyStyle,
  onScroll,
}: VerticalScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scroll;
    }
  }, [scroll]);

  return (
    <div
      ref={scrollRef}
      className="vertical-scroll-root"
      style={rootStyle}
      onScroll={onScroll}
    >
      <div className="vertical-scroll-body" style={bodyStyle} />
    </div>
  );
};
