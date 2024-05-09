import * as React from "react";

const easeOutExpo = (t: number) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

const useScrollTriggeredCountUp = (
  ref: React.RefObject<HTMLElement>,
  end: number,
  duration = 2000
) => {
  const [count, setCount] = React.useState(0);
  const isCounting = React.useRef(false);
  const hasCounted = React.useState(false);
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);

  const handleScroll = React.useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting && !isCounting.current && !hasCounted[0]) {
        hasCounted[1](true);
        isCounting.current = true;
        let frame = 0;

        const counter = setInterval(() => {
          frame++;
          const progress = easeOutExpo(frame / totalFrames);
          setCount(Math.round(end * progress));

          if (frame === totalFrames) {
            clearInterval(counter);
            isCounting.current = false;
          }
        }, frameRate);
      }
    },
    [end, frameRate, totalFrames, isCounting, hasCounted]
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [handleScroll, ref]);

  return count;
};

export default useScrollTriggeredCountUp;
