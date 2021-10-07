import React from "react";
import Instagram from "../../icons/instagram.svg";
import Facebook from "../../icons/facebook.svg";
import Github from "../../icons/github.svg";
import Linkedin from "../../icons/linkedin.svg";
import "./About.css";
import { motion } from "framer-motion";

const headerVariants = {
  press: {
    scale: 0.905,
    y: -15,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.5,
    },
  },
};

const About = () => {
  return (
    <div className="about" id="about">
      <section>
        <div className="left">
          <motion.h2
            variants={headerVariants}
            whileHover="hover"
            whileTap="press"
            className="head"
          >
            Read, About Me
          </motion.h2>
          <motion.p
            variants={headerVariants}
            whileHover="hover"
            whileTap="press"
            className="details"
          >
            I’m a 16-year old Full-stack web developer / mobile app developer
            who works from Kerala, India. mostly engaged in backend Development
            with Django <br />
            <br />
            Problem solver, Open source contributor, freelance developer, Love
            to build big projects with API, Frontend web, frontend
            cross-platform application, Great football fan, Especially fan of
            our Kerala blasters <br />
            <br />
            Interested in Fullstack web and cross-platform application, Like to
            work on ambitious projects with great people, Like to Collaborate
            with Skillful People <br />
          </motion.p>
        </div>
        <div className="right">
          <div className="glass-box">
            <div className="image">
              <motion.img
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                drag
                src="/me.jpg"
                alt="Rinshin Jalal"
              />
            </div>
            <motion.h2
              drag
              dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
              whileHover={{
                color: "#fff",
                scale: 1.01,
                transition: {
                  duration: 0.5,
                },
              }}
            >
              Rinshin Jalal
            </motion.h2>
            <motion.p whileHover={{ y: -1, scale: 1.02 }} whileTap={{ y: 0.5 }}>
              Do you want to want to build something incredible with ReactJs and
              Backend? Reach Me
            </motion.p>
            <div className="social">
              <motion.a
                whileHover={{ scale: 1 }}
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/rinzhin_net/"
              >
                <motion.img
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: [90, 0, -90, 0] }}
                  transition={{ repeat: 5, repeatType: "reverse" }}
                  src={Instagram}
                  alt="Instagram Profile"
                />
              </motion.a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100072458503440"
              >
                <motion.img
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: [40, 0, -40] }}
                  transition={{ repeat: 10, repeatType: "reverse" }}
                  src={Facebook}
                  alt="Facebook Profile"
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Rinshin-Jalal"
              >
                <motion.img
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: [40, 0, -40] }}
                  transition={{ repeat: 10, repeatType: "reverse" }}
                  src={Github}
                  alt="GitHub Profile"
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/rinshin-jalal-09859021b/"
              >
                <motion.img
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: [40, 0, -40] }}
                  transition={{ repeat: 10, repeatType: "reverse" }}
                  src={Linkedin}
                  alt="LinkedIn Profile"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
