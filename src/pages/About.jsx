import { motion } from "framer-motion";
import { useRef } from "react";
export const About = () => {
  const scrollRef = useRef(null);
  return (
    <>
      <section className="AboutSection">
        <div className="AboutContainer">
          <div className="AboutInfo">
            <motion.h1
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ root: scrollRef }}
              whileInView={{ x: 0, opacity: 1 }}
              
            >
              ABOUT THE DEVELOPER
            </motion.h1>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ root: scrollRef }}
              whileInView={{ x: 10, opacity: 1 }}
            >
              Welcome to the world of Stunning Web Development Designs, where
              ingenuity and expertise entwine to create marvelous websites.
              Marvel at the genius of our elite web developer and take a journey
              through a universe of exquisite web designs for creatives,
              businesses, and individuals alike.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};
