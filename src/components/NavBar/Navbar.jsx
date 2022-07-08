/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="container sticky bg-goodBlack p-11 mx-auto bg-gray">
      <div className="flex  justify-between">
        <div className="text-white p-5">
          <h1 className={styles.text}>OJYINKA</h1>
        </div>
        <div className="flex hidden text-white md:flex flex-row space-x-5 p-5 ">
          <a className="hover:text-lightRed" href="http://">
            Home
          </a>
          <a className="hover:text-lightRed" href="http://">
            About
          </a>
          <a className="hover:text-lightRed" href="http://">
            Portfolio
          </a>
          <a className="hover:text-lightRed" href="http://">
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
        <a className="hover:text-lightRed" href="http://">
          Home
        </a>
        <a className="hover:text-lightRed" href="http://">
          About
        </a>
        <a className="hover:text-lightRed" href="http://">
          Portfolio
        </a>
        <a className="hover:text-lightRed" href="http://">
          Contact
        </a>
        <a
          className=" text-white px-8 rounded-full outline outline-offset-2 outline-white hover:outline-lightRed"
          href="http://"
        >
          CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
