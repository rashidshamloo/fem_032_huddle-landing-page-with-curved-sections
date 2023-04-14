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

interface sectionProps {
  curve?: string;
  image?: string;
  bg?: string;
  title: string;
  text: string;
  className?: string;
  reverse?: boolean;
  imageEffect?: keyof variantsType;
  textEffect?: keyof variantsType;
  duration?: number;
}

const Section = ({
  curve = "",
  image,
  bg = "",
  title,
  text,
  className,
  reverse = false,
  imageEffect = "fadeIn",
  textEffect = "fadeIn",
  duration = 1.5,
  ...props
}: sectionProps) => {
  // animation control
  const [imageScope, imageAnimate] = useAnimate();
  const [textScope, textAnimate] = useAnimate();
  // useInView for image and test
  const [imageRef, imageInView, imageEntry] = useInView({ threshold: 0.5 });
  const [textRef, textInView, textEntry] = useInView({ threshold: 0.5 });

  // animating image when in view
  useEffect(() => {
    if (imageInView) {
      imageAnimate(imageScope.current, variants[imageEffect].inView, {
        duration: duration,
      });
    } else {
      imageAnimate(imageScope.current, variants[imageEffect].notInView, {
        duration: duration,
      });
    }
  }, [imageInView]);

  // animating text when in view
  useEffect(() => {
    if (textInView) {
      textAnimate(textScope.current, variants[textEffect].inView, {
        duration: duration,
      });
    } else {
      textAnimate(textScope.current, variants[textEffect].notInView, {
        duration: duration,
      });
    }
  }, [textInView]);

  return (
    <section className={className} {...props}>
      {curve && (
        <picture>
          <source
            srcSet={`images/bg-section-top-desktop-${curve}.svg`}
            media="(min-width:600px)"
          />
          <img
            src={`images/bg-section-top-mobile-${curve}.svg`}
            alt=""
            aria-hidden="true"
            className="w-full"
            draggable="false"
          />
        </picture>
      )}
      <div
        className={
          "flex items-center justify-evenly py-16  md:py-0 " +
          bg +
          (reverse
            ? " flex-col-reverse md:flex-row-reverse"
            : " flex-col md:flex-row")
        }
      >
        <motion.div
          className="max-w-[70%] md:max-w-[35%]"
          variants={variants[imageEffect]}
          initial="notInView"
          ref={imageScope}
        >
          <img
            src={`images/illustration-${image}.svg`}
            alt="Grow Together"
            aria-hidden="true"
            className="max-w-full"
            draggable="false"
            ref={imageRef}
          />
        </motion.div>
        <motion.div
          className="mt-20 md:mt-0 md:max-w-[35%] md:text-left"
          variants={variants[textEffect]}
          initial="notInView"
          ref={textScope}
        >
          <h2 className="font-poppins text-xl font-bold md:text-[2.5rem]">
            {title}
          </h2>
          <p
            className="mx-8 mt-4 text-sm font-[600] text-veryDarkCyan/80 md:mx-0 md:mt-8 md:text-base"
            ref={textRef}
          >
            {text}
          </p>
        </motion.div>
      </div>
      {curve && (
        <picture>
          <source
            srcSet={`images/bg-section-bottom-desktop-${curve}.svg`}
            media="(min-width:600px)"
          />
          <img
            src={`images/bg-section-bottom-mobile-${curve}.svg`}
            alt=""
            aria-hidden="true"
            className="w-full"
            draggable="false"
          />
        </picture>
      )}
    </section>
  );
};

export default Section;
