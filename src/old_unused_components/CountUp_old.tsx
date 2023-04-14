// this is the old version implemented using the "useInView()" hook from "react-intersection-observer"
// in the new version, I used the "useInView()" hook from "Framer Motion"

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface CountUpProps {
  image: string;
  maxCount: number;
  unit: string;
  text: string;
  className?:string;
}

const CountUp = ({ image, maxCount, unit, text, className="", ...props }: CountUpProps) => {
  // settings
  const countStep = 0.1;
  const countDelay = 100;

  // ref
  const [ref, inView, entry] = useInView({ threshold: 0.25 });

  // interval id to use for clearInterval
  let intervalId: number;

  // countUp function
  const countUp = () => {
    if (entry) {
      if (Number(entry.target.textContent) < maxCount)
        entry.target.textContent = String(
          (Number(entry.target.textContent) + countStep).toFixed(1)
        );
      else clearInterval(intervalId);
    }
  };

  // start countUp when in view and stop when not
  useEffect(() => {
    if (inView) intervalId = setInterval(() => countUp(), countDelay);
    else {
      clearInterval(intervalId);
      if (entry) {
        entry.target.textContent = "0.0";
      }
    }
  }, [inView]);

  return (
    <div className={"inline-block "+className} {...props}>
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
