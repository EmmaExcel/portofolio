
import Enchantment from "./Enchantment"
import LandingPage from "./LandingPage"
// import Project from "./Project"
import Skills from "./Skills"
import Transformation from "./Transformation"
import Unrivaled from "./Unrivaled"
import Spellbinding from "./spellbinding"
import { motion, useIsPresent } from "framer-motion";
import { useRef } from "react";
import { useFollowPointer } from "../use-follow-pointer";
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import { About } from "./About"
import Project from "./Project"

const Home = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);


  return (
   <>

  
    <LandingPage />
     <Unrivaled />
     <Transformation />
     <Spellbinding />
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
      zIndex:0
    }}

      
    />
    <About/>
    <Project/>
    <Footer/>
   </>
  )
}

export default Home
