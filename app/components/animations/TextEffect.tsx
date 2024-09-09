/* NOTE: This is a component from the motion primitives library animation docs found at 
https://motion-primitives.com/docs/text-effect
*/
"use client";
import { motion, TargetAndTransition, Variants } from "framer-motion";
import React, { ReactNode } from "react";

type PresetType = "blur" | "shake" | "scale" | "fade" | "slide";

type TextEffectProps = {
  children: ReactNode;
  per?: "word" | "char";
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: PresetType;
  delay?: number;
  trigger?: boolean;
  onAnimationComplete?: () => void;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(12px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  },
  shake: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 0 },
      visible: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.5 } },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
};

const AnimatedText: React.FC<{
  text: string;
  variants: Variants;
  per: "word" | "char";
}> = React.memo(({ text, variants, per }) => {
  const splitText = per === "word" ? text.split(/(\S+)/) : text;

  return (
    <>
      {Array.from(splitText).map((char, index) => (
        <motion.span
          key={index}
          variants={variants}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
});

AnimatedText.displayName = "AnimatedText";

const AnimatedElement: React.FC<{
  element: React.ReactElement;
  itemVariants: Variants;
  per: "word" | "char";
}> = ({ element, itemVariants, per }) => {
  const animatedChildren = React.Children.map(
    element.props.children,
    (child) => {
      if (typeof child === "string") {
        return <AnimatedText text={child} variants={itemVariants} per={per} />;
      }
      if (React.isValidElement(child)) {
        return (
          <AnimatedElement
            element={child}
            itemVariants={itemVariants}
            per={per}
          />
        );
      }
      return child;
    }
  );

  return React.cloneElement(element, {}, animatedChildren);
};

export function TextEffect({
  children,
  per = "word",
  variants,
  className,
  preset,
  delay = 0,
  trigger = true,
  onAnimationComplete,
}: TextEffectProps) {
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  const delayedContainerVariants: Variants = {
    ...containerVariants,
    visible: {
      ...containerVariants.visible,
      transition: {
        ...(containerVariants.visible as TargetAndTransition)?.transition,
        delayChildren: delay,
      },
    },
  };

  const animateContent = (content: ReactNode): ReactNode => {
    if (typeof content === "string") {
      return <AnimatedText text={content} variants={itemVariants} per={per} />;
    }
    if (React.isValidElement(content)) {
      return (
        <AnimatedElement
          element={content}
          itemVariants={itemVariants}
          per={per}
        />
      );
    }
    return content;
  };

  return (
    <motion.div
      initial="hidden"
      animate={trigger ? "visible" : "hidden"}
      variants={delayedContainerVariants}
      className={className}
      onAnimationComplete={onAnimationComplete}
    >
      {React.Children.map(children, animateContent)}
    </motion.div>
  );
}
