/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav className="-mt-7 fixed p-2 w-full z-10 top-0">
      <div className="container py-1  bg-goodBlack p-11 mx-auto bg-gray">
        <div className="flex  justify-between">
          <div className="text-white p-5">
            <h1 className={styles.text}>OJYINKA</h1>
          </div>
          <div className="flex hidden text-white md:flex flex-row space-x-5 p-5 ">
            <a className="hover:text-lightRed" href="#projects">
              Projects
            </a>
            <a className="hover:text-lightRed" href="#skills">
              Skills
            </a>
            <a className="hover:text-lightRed" href="#about">
              About Me
            </a>
            <a className="hover:text-lightRed" href="#contact">
              Contact
            </a>
            <a
              className="text-white px-8 outline outline-offset-2 outline-white hover:outline-lightRed"
              href="http://"
            >
              CV
            </a>
          </div>
          <span
            onClick={() => setOpen(!open)}
            className="material-symbols-outlined cursor-pointer text-white p-5 md:hidden"
          >
            {open ? "menu" : "close"}
          </span>
        </div>
        <div
          className={`flex mt-3 items-center ${
            open ? "hidden" : "flex"
          } px-16 mx-auto ${
            styles.menubar
          } space-y-5 flex-col text-white md:hidden`}
        >
          <a className="hover:text-lightRed" href="#projects">
            Projects
          </a>
          <a className="hover:text-lightRed" href="#skills">
            Skills
          </a>
          <a className="hover:text-lightRed" href="#about">
            About Me
          </a>
          <a className="hover:text-lightRed" href="#contact">
            Contact
          </a>
          <a
            className="text-white px-8 outline outline-offset-2 outline-white hover:outline-lightRed"
            href="http://"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
