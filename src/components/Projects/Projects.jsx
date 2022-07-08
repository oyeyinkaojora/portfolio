/* eslint-disable react/jsx-no-comment-textnodes */
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      className="container p-16 mx-auto"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ delay:1,  }}
    >
      <h1 className="text-2xl text-white text-center">PROJECTS</h1>
      <div className="mt-12">
        <div className="py-52 bg-white"></div>
      </div>

      <div className="mt-4">
        <p className="text-2xl" style={{ color: "#808080" }}>
          // Tech stack
        </p>
        <div className="flex mt-3 space-x-3">
          <div className="rounded-none bg-white px-2">REACT</div>
          <div className="rounded-none bg-white px-3 ">REACT</div>
        </div>
      </div>

      <div className="mt-12">
        <div className="py-52  bg-white"></div>
      </div>

      <div className="mt-4">
        <p className="text-2xl" style={{ color: "#808080" }}>
          // Tech stack
        </p>
        <div className="flex mt-3 space-x-3">
          <div className="rounded-none bg-white px-2">REACT</div>
          <div className="rounded-none bg-white px-3 ">REACT</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
