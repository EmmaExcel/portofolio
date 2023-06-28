import { motion } from "framer-motion";
import { useRef } from "react";

const Spellbinding = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <section className="spellSection">
        <div className="spellContainer">
          <div className="spellInfo">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ root: scrollRef }}
              whileInView={{ y: 10, opacity: 1 }}
            >
              Spellbinding Showcase
            </motion.h1>
            <motion.p
              initial={{ y: 200, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ root: scrollRef }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Feast your eyes on Excels wizardry. His most mesmerizing creations
              materialize below, showcasing his weaving of complex animations
              and extraordinary illustrations.
            </motion.p>
          </div>

          <motion.div
            initial={{ x: 70, opacity: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ root: scrollRef }}
            whileInView={{ x: 0, opacity: 1 }}
            className="spellImageContainer"
          >
            <img src="/spell.png" alt="" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Spellbinding;
