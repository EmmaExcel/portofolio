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
    <section className="MainProjectSection">
      <div className="MainProjectImageContainer" ref={ref} style={{ aspectRatio }}>
        <img className="MainProjectImage" src={images} alt={alt} />
        <p>{name}</p>
      </div>
     {/*  <motion.h2 style={{ y }}>{`#00${index}`}</motion.h2> */}
      <motion.a className="MainProjectLink" href={link} style={{ y }}>{`#00${index}`}</motion.a>
    </section>
  );
}
