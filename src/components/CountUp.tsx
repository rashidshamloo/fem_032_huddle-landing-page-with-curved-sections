import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  image: string;
  maxCount: number;
  unit: string;
  text: string;
  once?: boolean;
  className?: string;
}

const CountUp = ({
  image,
  maxCount,
  unit,
  text,
  once = true,
  className = "",
  ...props
}: CountUpProps) => {
  // settings
  const countStep = 0.1;
  const countDelay = 150;

  // ref and inView
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.25, once: once });

  // interval id to use for clearInterval
  let intervalId: number;

  // countUp function
  const countUp = () => {
    if (ref.current) {
      if (Number(ref.current.textContent) < maxCount)
        ref.current.textContent = String(
          (Number(ref.current.textContent) + countStep).toFixed(1)
        );
      else clearInterval(intervalId);
    }
  };

  // start countUp when in view and stop when not
  useEffect(() => {
    if (inView) intervalId = setInterval(() => countUp(), countDelay);
    else {
      clearInterval(intervalId);
      if (ref.current) {
        ref.current.textContent = "0.0";
      }
    }
  }, [inView]);

  return (
    <div className={"inline-block " + className} {...props}>
      <img
        src={`/images/${image}.svg`}
        alt=""
        aria-hidden="true"
        className="mb-2 w-[2rem] md:w-auto"
      />
      <p className="text-6xl font-bold md:text-8xl">
        <span ref={ref}>0.0</span>
        {unit}+
      </p>
      <p className="mt-4 text-veryDarkCyan/60 md:mt-6 md:text-2xl">{text}</p>
    </div>
  );
};

export default CountUp;
