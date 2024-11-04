import { useScrollProgress } from '@/hooks/use-scroll-progress';
import * as React from 'react';

export function Scroll({ children }: React.PropsWithChildren) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollProgress, updateScrollProgress } = useScrollProgress(ref);

  return (
    <>
      <div
        className="scrollbar-hide max-h-[min(50vh,250px)] w-screen overflow-y-scroll sm:w-auto"
        ref={ref}
        onScroll={updateScrollProgress}
      >
        {children}
      </div>
      {/* Bottom scroll fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 hidden h-7 w-full rounded-b-md bg-gradient-to-t from-gray-100 sm:block"
        style={{ opacity: 1 - Math.pow(scrollProgress, 2) }}
      ></div>
    </>
  );
}
