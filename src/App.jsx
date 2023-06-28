import { AnimatePresence } from "framer-motion"
import React from "react"
import Home from "./pages/Home";
import { Gallery } from "./components/template/Gallery";
import { Photos } from "./components/data";
import { useLocation, useRoutes } from "react-router-dom";




function App() {
 
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Allprojects",
      element: (
        <Gallery
       
          photos={Photos}
          title="My Projects"
          titleWidth={8.2}
          category="zuid"
          alt="Holla"
        />
      )
    }
  ]);

  const location = useLocation();

  if (!element) return null;
  return (
    <>
       <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
    </>
  )
}

export default App
