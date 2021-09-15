import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";

const headerVariants = {
  init: {
    color: "#000",
  },
  animate: {
    color: "#fff",
    transition: { duration: 1 },
  },
  press: {
    scale: 0.95,
    rotate: -0.5,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.05,
    rotate: 0.5,
    transition: {
      duration: 0.5,
    },
  },
};

const header3Variants = {
  press: {
    scale: 0.95,

    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.5,
    },
  },
};

const btnVariants = {
  hover: {
    scale: 1.1,
  },
  pressed: {
    scale: 0.9,
  },
};

function Home() {
  return (
    <div className="home">
      <main>
        <motion.h1
          variants={headerVariants}
          initial="init"
          animate="animate"
          whileHover="hover"
          whileTap={"press"}
          id="home"
        >
          Hi,
          <br />
          I'm
          <img src="/logo.png" alt="" />
          inshin Jalal,
          <br />
          FullStack Developer
        </motion.h1>
        <motion.h3
          variants={header3Variants}
          whileHover="hover"
          whileTap={"press"}
        >
          Django React / MERN stack FullStack Developer
        </motion.h3>
        <motion.p
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          variants={btnVariants}
          whileHover={"hover"}
          className="btn"
        >
          <NavHashLink to="/#contact">Contact Me!</NavHashLink>
        </motion.p>
      </main>
    </div>
  );
}

export default Home;
