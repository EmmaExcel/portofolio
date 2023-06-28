import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [`-${distance}`, distance]);
}

export function Image({ alt, category, index, aspectRatio,images, name,link,id  }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({target: ref});
  const y = useParallax(scrollYProgress, "50vh");

  return (
    <section>
      <div ref={ref} style={{ aspectRatio }}>
        <img src={images} alt={alt} />
      </div>
     {/*  <motion.h2 style={{ y }}>{`#00${index}`}</motion.h2> */}
      <motion.a href={link} style={{ y }}>{name}</motion.a>
    </section>
  );
}
