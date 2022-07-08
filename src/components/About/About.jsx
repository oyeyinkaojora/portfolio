import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 3 }}
      className="container text-white space-y-5 mx-auto mt-16 w-2/3 md:p-11 "
    >
      <h1 className="text-3xl  text-center">ABOUT ME</h1>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
        tempore at voluptas eaque dolore animi unde aliquam tempora suscipit
        fugit laudantium nam delectus rem, cumque et mollitia repellat eius
        vero, quibusdam placeat.
      </p>
    </motion.div>
  );
}

export default About;
