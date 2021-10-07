import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { motion } from "framer-motion";

const headerVariants = {
  press: {
    scale: 0.95,
    rotate: -2,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: {
      duration: 0.5,
    },
  },
};

const NotFound = () => {
  return (
    <div className="notFoundmain">
      <div className="notfound" title="Photo by Peter bo on Unsplah">
        <motion.h1
          variants={headerVariants}
          whileTap="press"
          whileHover="hover"
        >
          404
        </motion.h1>
        <div className="r">
          <motion.p
            variants={headerVariants}
            whileTap="press"
            whileHover="hover"
          >
            Nothing Here
          </motion.p>
          <Link to="/">Back Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
