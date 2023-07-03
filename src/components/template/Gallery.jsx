import { motion, useIsPresent } from "framer-motion";
import { Image } from "./Image";
import { Link } from "react-router-dom";


export function Gallery({ category, alt, title, titleWidth, photos }) {

  const isPresent = useIsPresent();

  
  return (
    <article className="ProjectArticle">
      <h1 className="projectTitle" style={{ "--base-width": `${titleWidth}vw`, x: "-50%" }}>
        {title}  
      
      </h1>

      <footer className="back">
        <Link to="/">Back</Link>
      </footer>
      {photos.map(({ aspectRatio, images, name,link,id }, index ) => (
        <Image
        key={alt}
          category={category}
          index={index + 1}
          alt={alt}
          aspectRatio={aspectRatio}
        images={images}
        name={name}
        link={link}
        id={id}
        />

        
      ))}
   
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </article>
  );
}
