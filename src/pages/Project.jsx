import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    name: "WEB MASTERY",
    text: "Innovative, attractive websites that’ll leave your visitors wanting more .",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc3BvbnNpdmUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "RESPONSIVE DESIGN",
    text: "Seamlessly adapting to deliver a stunning experience, regardless of device.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1616138276663-5041438a8476?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNsZWFuJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "CLEAN CODE",
    text: "Efficient and maintainable code, neatly organized for optimal performance.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1616138276663-5041438a8476?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNsZWFuJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "CLEAN CODE",
    text: "Efficient and maintainable code, neatly organized for optimal performance.",
  },
];

const Project = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <section className="projectSection">
        <div className="projectContainer">
          <div className="projectHeader">PROJECT SHOWCASE</div>

          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="projectListContainer"
          >
            {data.map((project) => (
              <motion.li whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} variants={item} key={project.id} className="project">
                <img src={project.image} alt="" />
              </motion.li>
            ))}
          </motion.ul>

          <Link to="/Allprojects
          ">view all</Link>
        </div>
      </section>
    </>
  );
};

export default Project;
