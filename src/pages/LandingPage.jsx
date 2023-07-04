import "../global.css";
import { useRef } from "react";
import { motion, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const scrollRef = useRef(null);
  const isPresent = useIsPresent();
  return (
    <>
      <section className="HomeSection">
        <article className="PageArticle">
          <ul>
            <li>
              <Link to="/Allprojects">Projects</Link>
            </li>
          </ul>

          <motion.div
            initial={{ scaleX: 1 }}
            animate={{
              scaleX: 0,
              transition: { duration: 0.5, ease: "circOut" },
            }}
            exit={{
              scaleX: 1,
              transition: { duration: 0.5, ease: "circIn" },
            }}
            style={{ originX: isPresent ? 0 : 1 }}
            className="privacy-screen"
          />
        </article>
        <div className="HomeContainer">
          <div className="HomeInfoContainer" ref={scrollRef}>
            <motion.div className="HomeInfo">
              <motion.p whileHover={{ scale: 3.0 }} whileTap={{ scale: 1.2 }} >
                .
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
