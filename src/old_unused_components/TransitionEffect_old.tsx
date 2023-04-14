// this is the old version i was using before i knew you could pass the amount to
// the viewport property of the "motion.div" element and use "whileInView" property
// without needing to use "useAnimate", "useInView", and "useEffect" ...


import { useEffect } from "react";

// framer motion
import { motion, useAnimate, useInView } from "framer-motion";

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
  const inView = useInView(scope,{amount:threshold});
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
{children}
    </motion.div>
  );
};

export default TransitionEffect;
