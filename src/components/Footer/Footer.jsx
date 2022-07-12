import linkedin from "../../assets/svg/footer-linkedin.svg";
import github from "../../assets/svg/footer-github.svg";
import twitter from "../../assets/svg/footer-twitter.svg";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="mt-16 space-y-5">
      <h1 className="text-white text-3xl font-bold text-center">
        OJORA OYEYINKA
      </h1>
      <div className="flex space-x-5 mx-auto justify-center">
        <a
          href="https://www.linkedin.com/in/ojora-oyeyinka-olamide-5b8568169"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            src={linkedin}
            width="40"
            height="40"
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
            width="40"
            height="40"
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
            width="40"
            height="40"
            alt="twitter"
          />
        </a>
      </div>

      <div className="text-white text-center -mt-3">
        <p>Designed with ❤️ by Ojora Oyeyinka</p>
      </div>
    </div>
  );
}

export default Footer;
