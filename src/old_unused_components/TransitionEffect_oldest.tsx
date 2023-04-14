// this is the old version.
// i was using both framer motion and react-intersection-observer because
// i thought it was not possible to set the amount of element that
// needs to be in view before inView is true in framer motion
// i made a newer version using only framer motion after learning about
// the "viewport" "amount" that allows you to do that...

import { useEffect } from "react";

// framer motion
import { motion, useAnimate } from "framer-motion";

// react-intersection-observer
import { useInView } from "react-intersection-observer";

// variants
import { variants, variantsType } from "../settings/variants";

//interfaces
interface TransitionEffectProps {
  effect?: keyof variantsType;
  duration?: number;
  delay?: number;
  threshold?: number;
  children: React.ReactNode;
}

const TransitionEffect = ({
  effect = "fadeIn",
  duration = 1,
  delay = 0,
  threshold = 0.5,
  children,
}: TransitionEffectProps) => {
  const [scope, animate] = useAnimate();
  const [ref, inView] = useInView({ threshold: threshold });
  useEffect(() => {
    if (inView) {
      animate(scope.current, variants[effect].inView, {
        duration: duration,
        delay: delay,
      });
    } else {
      animate(scope.current, variants[effect].notInView, {
        duration: duration,
        delay: delay,
      });
    }
  }, [inView]);
  return (
    <motion.div variants={variants[effect]} initial="notInView" ref={scope}>
      <div ref={ref}>{children}</div>
    </motion.div>
  );
};

export default TransitionEffect;
