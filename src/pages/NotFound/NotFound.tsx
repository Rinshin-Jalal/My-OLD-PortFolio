import React from "react";
import "./NotFound.css";
import { motion } from "framer-motion";

const headerVariants = {
  press: {
    scale: 0.9,
    rotate: -4,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.1,
    rotate: 4,
    transition: {
      duration: 0.5,
    },
  },
};

const NotFound = () => {
  return (
    <div>
      <div className="notfound">
        <motion.h1
          variants={headerVariants}
          whileTap="press"
          whileHover="hover"
        >
          404
        </motion.h1>
        <motion.p variants={headerVariants} whileTap="press" whileHover="hover">
          Page Not Found
        </motion.p>
      </div>
    </div>
  );
};

export default NotFound;
