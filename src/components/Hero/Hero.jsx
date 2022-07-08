/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import styles from "./Hero.module.scss";
import linkedin from "../../assets/svg/white-linkedin.svg";
import github from "../../assets/svg/white-github.svg";
import twitter from "../../assets/svg/twitter.svg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      className="mx-auto mt-5 container p-11   text-white"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <div className="flex flex-col p-3 space-y-4">
        <h1 className="text-4xl md:text-7xl">
          Hello, I'm <span className={styles.nameColor}>Ojora Oyeyinka 👋</span>
        </h1>
        <p className="text-2xl md:text-4xl ">
          I'm a <span className={styles.nameColor}>Frontend Developer</span>
        </p>
        <div className="flex cursor-pointer">
          <motion.img
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            src={linkedin}
            width="50"
            className="hover:bg-lightRed"
            height="50"
            alt="linkedin"
          />
          <motion.img
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            src={github}
            className="hover:bg-lightRed"
            width="50"
            height="50"
            alt="linkedin"
          />
          <motion.img
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            src={twitter}
            className="hover:bg-lightRed"
            width="50"
            height="50"
            alt="linkedin"
          />
        </div>
        <div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className={`${styles.projects} rounded-none px-5 py-4`}
          >
            View Projects
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
