import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import MailSvg from "../../icons/contact.svg";

require("dotenv").config();

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

const btnVariants = {
  hover: {
    scale: 1.1,
  },
  pressed: {
    scale: 0.9,
  },
};

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [button, setButton] = useState<string>("Send Message!");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("subject", subject);
    formdata.append("message", message);
    setDisabled(true);
    setButton("");
    console.log(`${process.env.REACT_APP_API_URL}`);
    fetch(`${process.env.REACT_APP_API_URL}`, {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        setSubject("");
        setEmail("");
        setName("");
        setMessage("");
        setDisabled(false);
        setButton("Send Message!");
      })
      .catch((error) =>
        console.log(
          "Something Went Wrong \nAdd this as a Issue! in  it at Github Repo: https://github.com/Rinshin-Jalal/My-PortFolio"
        )
      );
  };
  return (
    <div className="contact" id="contact">
      <section>
        <div className="left">
          <motion.h1
            className="head"
            variants={headerVariants}
            whileHover="hover"
            whileTap="press"
          >
            Contact Me
          </motion.h1>
          <motion.p
            variants={headerVariants}
            animate="animate"
            initial="init"
            whileHover="hover"
            whileTap="press"
            className="details"
          >
            I’m interested in freelance works - especially Full-Stack projects.
            If you have other requests or questions, don’t hesitate to contact
            me in the form.
          </motion.p>
          <form onSubmit={onSubmit}>
            <div className="resizables">
              <motion.input
                whileFocus={{ scale: 1.1, color: "#ffffff" }}
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <motion.input
                whileFocus={{ scale: 1.1, color: "#ffffff" }}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <motion.input
              whileFocus={{ scale: 1.1, color: "#ffffff" }}
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <motion.textarea
              whileFocus={{ scale: 1.1, color: "#ffffff" }}
              placeholder="Message"
              cols={30}
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></motion.textarea>
            <motion.button
              variants={btnVariants}
              whileHover="hover"
              whileTap="press"
              disabled={disabled}
              className="btn"
              type="submit"
            >
              {button}
              {disabled && (
                <motion.h4
                  animate={{
                    color: ["#fff", "#ccc", "#bbb", "#000"],
                    transition: {
                      repeat: 5,
                      repeatType: "reverse",
                    },
                  }}
                  style={{ fontSize: "25px", fontFamily: "var(--font-2)" }}
                >
                  Loading...
                </motion.h4>
              )}
            </motion.button>
          </form>
        </div>
        <div className="right">
          <div className="glass-box">
            <motion.h2 whileHover={{ scale: 0.9 }}>
              Feel Free To Contact me
            </motion.h2>
            <img src={MailSvg} alt="Feel Free to Contact me" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
