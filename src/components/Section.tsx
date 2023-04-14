// framer motion
import { motion } from "framer-motion";

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
  once?: boolean;
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
  once = true,
  ...props
}: sectionProps) => {
  return (
    <section className={className} {...props}>
      {curve && (
        <picture>
          <source
            srcSet={`/images/bg-section-top-desktop-${curve}.svg`}
            media="(min-width:600px)"
          />
          <img
            src={`/images/bg-section-top-mobile-${curve}.svg`}
            alt=""
            aria-hidden="true"
            className="w-full"
            draggable="false"
          />
        </picture>
      )}
      <div
        className={
          "flex flex-col items-center justify-evenly overflow-hidden py-16  md:py-8 " +
          bg +
          (reverse ? " md:flex-row-reverse" : " md:flex-row")
        }
      >
        <motion.div
          className="max-w-[70%] md:max-w-[35%]"
          variants={variants[imageEffect]}
          initial="notInView"
          whileInView="inView"
          viewport={{ amount: 0.5, once: once }}
          transition={{ duration: duration }}
        >
          <img
            src={`/images/illustration-${image}.svg`}
            alt="Grow Together"
            aria-hidden="true"
            className="max-w-full"
            draggable="false"
          />
        </motion.div>
        <motion.div
          className="mt-20 md:mt-0 md:max-w-[35%] md:text-left"
          variants={variants[textEffect]}
          initial="notInView"
          whileInView="inView"
          viewport={{ amount: 0.5, once: once }}
          transition={{ duration: duration }}
        >
          <h2 className="font-poppins text-xl font-[700] leading-tight md:text-[2.5rem]">
            {title}
          </h2>
          <p className="mx-8 mt-4 text-sm font-[600] text-veryDarkCyan/50 md:mx-0 md:mt-8 md:text-base md:text-veryDarkCyan/80">
            {text}
          </p>
        </motion.div>
      </div>
      {curve && (
        <picture>
          <source
            srcSet={`/images/bg-section-bottom-desktop-${curve}.svg`}
            media="(min-width:600px)"
          />
          <img
            src={`/images/bg-section-bottom-mobile-${curve}.svg`}
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
