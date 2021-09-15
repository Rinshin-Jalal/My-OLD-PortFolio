import React, { useState } from "react";
import "./Contact.css";
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

const btnVariants = {
  hover: {
    scale: 1.1,
  },
  pressed: {
    scale: 0.9,
  },
};

const loadingVariants = {
  animate: {
    color: ["#fff", "#ccc", "#bbb", "#000"],
    transition: { yoyo: Infinity },
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
    fetch("https://serverinzhin.herokuapp.com/s/server/contact/", {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubject("");
        setEmail("");
        setName("");
        setMessage("");
        setDisabled(false);
        setButton("Send Message!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="contact">
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
                whileFocus={{ scale: 1.1, color: "white" }}
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <motion.input
                whileFocus={{ scale: 1.1, color: "white" }}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <motion.input
              whileFocus={{ scale: 1.1, color: "white" }}
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <motion.textarea
              whileFocus={{ scale: 1.1, color: "white" }}
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
                  variants={loadingVariants}
                  animate="animate"
                  style={{ fontFamily: "var(--font-2)" }}
                >
                  Loading...
                </motion.h4>
              )}
            </motion.button>
          </form>
        </div>
        <div className="right">
          <motion.iframe
            whileHover={{ scale: 0.9 }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1159.2597465737904!2d76.33693566403824!3d11.120307929787174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1631615050127!5m2!1sen!2sin"
            title="My Location - Karuvarakundu"
            style={{ border: 0 }}
            loading="lazy"
          ></motion.iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
