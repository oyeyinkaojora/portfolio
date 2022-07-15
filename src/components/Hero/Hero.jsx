import styles from "./Hero.module.scss";
import linkedin from "../../assets/svg/white-linkedin.svg";
import github from "../../assets/svg/white-github.svg";
import twitter from "../../assets/svg/twitter.svg";
import { motion } from "framer-motion";
import cv from "../../assets/cv/resume.pdf";

function Hero() {
  return (
    <motion.div
      className="mx-auto mt-24 container p-11   text-white"
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
          <a
            href="https://www.linkedin.com/in/ojora-oyeyinka-olamide-5b8568169"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
              src={linkedin}
              width="50"
              className="hover:bg-lightRed"
              height="50"
              alt="linkedin"
            />
          </a>

          <a
            href="https://github.com/oyeyinkaojora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
              src={github}
              className="hover:bg-lightRed"
              width="50"
              height="50"
              alt="Github"
            />
          </a>

          <a
            href="https://twitter.com/oyeyinkaojora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
              src={twitter}
              className="hover:bg-lightRed"
              width="50"
              height="50"
              alt="twitter"
            />
          </a>
        </div>
        <div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            className={`${styles.projects} rounded-none px-5 py-4`}
          >
            <a href={cv} download="ojora-oyeyinka">
              My Resume
            </a>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
