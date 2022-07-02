// eslint-disable-next-line no-unused-vars
import styles from "./Hero.module.scss";
import  linkedin  from "../../assets/svg/linkedin.svg";
import  github  from "../../assets/svg/github.svg";

function Hero() {
  return (
    <div className="mx-auto mt-5 container py-72  text-white">
      <div className="flex flex-col p-3 space-y-4">
        <h1 className={`${styles.introText}`}>
          Hello, I'm <span className={styles.nameColor}>Ojora Oyeyinka 👋</span>
        </h1>
        <p className={styles.careerText}>
          I'm a <span className={styles.nameColor}>Frontend Developer</span>
        </p>
        <div className="flex">
          <img src={linkedin} className="fill-white" width="50" height="50" alt="linkedin" />
          <img src={github} width="50" height="50" alt="linkedin" />
        </div>
        <div>
          <button className={`${styles.projects} rounded-none px-5 py-4`}>
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
