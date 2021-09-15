import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

const headerVariants = {
  press: {
    scale: 0.95,
    rotate: -0.5,
    y: -30,
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

const Skills = () => {
  return (
    <div className="skills">
      <section>
        <div className="left">
          <motion.h2
            className="head"
            variants={headerVariants}
            whileTap="press"
            whileHover="hover"
          >
            My Skills
          </motion.h2>

          <motion.p
            variants={headerVariants}
            whileTap="press"
            whileHover="hover"
            className="details"
          >
            For 2 years Am a Freelance Web Developer, Who loves to create
            amazing projects, Knows how to develop Full Stack Websites for
            business and consumer. <br />
            <br />
            I build amazing websites that are Responsive, Fast, Easy to Use, and
            developed with the best practices. My main focus is on Backend
            Development, Django, DjangoRestFramework, building small and
            medium-sized projects, open-source contributions, Automating tasks,
            and coding Amazing projects. <br />
            <br />I also have experience in Frontend development using ReactJs,
            HTML, CSS, SASS.
          </motion.p>
        </div>
        <div className="right">
          <div className="glass-box">
            <div className="grp" title="Frontend - 75%">
              <h1>Frontend</h1>
              <div className="bar">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 7.5 }}
                  className="barscore"
                  style={{
                    width: "75%",
                    background:
                      "linear-gradient(270.01deg, #00FF94 -0.1%, #2400FF 104.74%)",
                  }}
                ></motion.div>
              </div>
            </div>
            <div className="grp" title="Backend Development - 70%">
              <h1>Backend</h1>
              <div className="bar">
                <motion.div
                  className="barscore"
                  initial={{ width: "0%" }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 7 }}
                  style={{
                    background:
                      "linear-gradient(270.06deg, #FFFF00 -16.45%, #FF7400 107.28%)",
                  }}
                ></motion.div>
              </div>
            </div>
            <div className="grp" title="Django Rest Framework - 75%">
              <h1>DRF</h1>
              <div className="bar">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 7.5 }}
                  className="barscore"
                  style={{
                    background:
                      "linear-gradient(270.01deg, #FF006B -0.1%, #FF7400 104.74%)",
                  }}
                ></motion.div>
              </div>
            </div>
            <div className="grp" title="ReactJs - 60%">
              <h1>ReactJs</h1>
              <div className="bar">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 6 }}
                  className="barscore"
                  style={{
                    width: "60%",
                    background: `linear-gradient(270.05deg, #00FF94 -3.15%, #DBFF00 124.3%)`,
                  }}
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
