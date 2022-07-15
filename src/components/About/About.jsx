import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      id="about"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5, duration: 3 }}
      className="container text-white space-y-5 mx-auto mt-40 w-2/3 md:p-11 "
    >
      <h1 className="text-3xl  text-center">ABOUT ME</h1>
      <p className="text-center">
        I’m a Front End Developer(Reactjs) with 8 months of Industrial
        Experience, I enjoy developing friendly UI and also the integration of
        the backend API,I keep learning every day in other to up my skills, and
        I’ll be a great asset to any company that employs me because I have
        learned a lot and that means I have a lot to offer the company that
        employs me and I can also learn on the job, Plus I’m smart and
        intelligent.
      </p>
    </motion.div>
  );
}

export default About;
