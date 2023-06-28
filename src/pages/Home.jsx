
import Enchantment from "./Enchantment"
import LandingPage from "./LandingPage"
import Project from "./Project"
import Skills from "./Skills"
import Transformation from "./Transformation"
import Unrivaled from "./Unrivaled"
import Spellbinding from "./spellbinding"
import { motion, useIsPresent } from "framer-motion";
import { useRef } from "react";
import { useFollowPointer } from "../use-follow-pointer";
import { Link } from "react-router-dom"

const Home = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    const isPresent = useIsPresent();
  return (
   <>

   <article>
   <ul>
        <li>
          <Link to="/Allprojects">Amsterdam Zuid nightwalk</Link>
        </li>
      
    </ul>

    <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
   </article>
    <LandingPage />
     <Unrivaled />
     <Transformation />
     <Spellbinding />
     <Enchantment />
     <Skills/>
     <Project/>
     <motion.div
      ref={ref}
      className="box"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 60,
        restDelta: 0.001
      }}

      style={{ position: "fixed",
      top: 0,
      left: 0,
    }}

      
    />
   </>
  )
}

export default Home
