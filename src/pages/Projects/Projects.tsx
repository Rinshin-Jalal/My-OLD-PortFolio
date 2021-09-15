import React from "react";
import FadeIn from "../../comps/Fadein/FadeIn";
import { ReactComponent as Github } from "../../icons/github.svg";
import { ReactComponent as Web } from "../../icons/web.svg";
import "./Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects">
      <section>
        <h1 className="head">My Projects</h1>
        <div className="articles">
          <FadeIn>
            <a
              rel="noreferrer"
              href="https://fasalcheekode.netlify.app"
              target="_blank"
            >
              <div className="article">
                <motion.img
                  animate={{ scale: 1, borderRadius: "16px" }}
                  whileHover={{ scale: 1.1, borderRadius: 0 }}
                  src="/sir.png"
                  alt="Fasal Cheekode"
                />

                <Web title="Website" />
                <div className="desc">
                  <h2>Fasal Cheekode</h2>
                  <p>A Coach's website with Blogging and Quiz features</p>
                </div>
              </div>
            </a>
          </FadeIn>
          <FadeIn>
            <a rel="noreferrer" href="https://hl.rinzhin.net" target="_blank">
              <div className="article">
                <motion.img
                  animate={{ scale: 1, borderRadius: "16px" }}
                  whileHover={{ scale: 1.1, borderRadius: 0 }}
                  src="/rinz.png"
                  alt="RinzHighlights"
                />

                <Web title="Website" />
                <div className="desc">
                  <h2>RinzHighlights</h2>
                  <p>Webapp to watch highlights of latest soccer matches</p>
                </div>
              </div>
            </a>
          </FadeIn>
          <FadeIn>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://pkhmct.herokuapp.com/"
            >
              <div className="article">
                <motion.img
                  animate={{ scale: 1, borderRadius: "16px" }}
                  whileHover={{ scale: 1.1, borderRadius: 0 }}
                  src="/pkhmct.png"
                  alt="PKHMCT website"
                />

                <Web title="Website" />
                <div className="desc">
                  <h2>PKHM Charitable Trust</h2>
                  <p>PKHMCT - Users can get their data with their uid</p>
                </div>
              </div>
            </a>
          </FadeIn>
          <FadeIn>
            <a
              rel="noreferrer"
              href="https://github.com/Rinshin-Jalal/React-DRF-Auth-Template"
              target="_blank"
            >
              <div className="article">
                <motion.img
                  animate={{ scale: 1, borderRadius: "16px" }}
                  whileHover={{ scale: 1.1, borderRadius: 0 }}
                  src="/auto.jpg"
                  alt="DRF React Authentication Template"
                />
                <Github title="Github repository" />
                <div className="desc">
                  <h2>DRF React Authentication Template</h2>
                  <p>Auth Template with DjangoRestFramework and ReactJs</p>
                </div>
              </div>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Projects;
