import "../global.css";
import { useRef } from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  const scrollRef = useRef(null);

  return (
    <>
      <section className="HomeSection">
        <div className="HomeContainer">
          <div className="HomeInfoContainer" ref={scrollRef}>
            <motion.div
              className="HomeInfo"
             
            >
              <p>Emma-Okerhe Excel</p>
              <h1>WEB</h1>
              <h1>DEVELOPER</h1>
              <h1>ON A</h1>
              <h1>QUEST</h1>
            </motion.div>
          </div>
          <div className="HomeImageContainer">
            <div className="HomeImage">
              <img src="/blob.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
