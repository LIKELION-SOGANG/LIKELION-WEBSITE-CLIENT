import { useCallback, useEffect, useRef } from 'react';

export const useScrollCount = (end, step, start = 0, duration = 10) => {
  const dom = useRef();
  const observer = useRef(null);
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      if (entry.isIntersecting) {
        let currentNumber = start;

        const counter = setInterval(() => {
          currentNumber += step;
          current.innerHTML = currentNumber.toLocaleString();

          if (currentNumber === end) {
            clearInterval(counter);
            observer.current.disconnect(dom.current);
          }
        }, stepTime);
      }
    },
    [end, start, stepTime, dom],
  );

  useEffect(() => {
    if (dom.current) {
      observer.current = new IntersectionObserver(handleScroll, {
        threshold: 0.8, // 지정한 ref dom 이 화면상에 80% 이상 보이면 동작 실행
      });
      observer.current.observe(dom.current);
    }

    return () => observer && observer.current.disconnect();
  }, [handleScroll]);

  return {
    ref: dom,
  };
};
