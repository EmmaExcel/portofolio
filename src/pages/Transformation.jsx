import { motion } from "framer-motion";
import { useRef } from "react";
const Transformation = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <section className="transSection">
        <div className="transContainer">
          <motion.p
             initial={{ x: -70, opacity: 0 }}
             transition={{ duration: 1, delay: 0.1 }}
             viewport={{ root: scrollRef }}
             whileInView={{ x: 0, opacity: 1 }}>About Me</motion.p>
          <motion.h1
      initial={{ y:20, opacity: 0}}
      transition={{  duration: 1 }}
          viewport={{ root: scrollRef }}
          whileInView={{ y: 0, opacity: 1}}>
            Transforming the digital world with eye-catching, interactive
            experiences.
          </motion.h1>
        </div>
      </section>
    </>
  );
};

export default Transformation;
