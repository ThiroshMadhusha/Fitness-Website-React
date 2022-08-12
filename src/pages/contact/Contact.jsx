import React from "react";
import "./contact.css";
import HeaderImage from "../../assets/header/gym3.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import Header from "../../components/Header";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        accusantium saepe quaerat, iure eum explicabo provident, recusandae
        mollitia ad tempora, alias dicta. Accusamus nesciunt alias porro odio
        quas nam, totam velit facilis praesentium recusandae sint voluptas
        aperiam quaerat aut suscipit molestias molestiae fugit adipisci minima
        autem eius blanditiis deserunt? Dolores!
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:thiroshmadhusha0520@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <MdEmail className="contact__icon" />
            </a>
            <a
              href="mailto:thiroshmadhusha0520@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsMessenger className="contact__icon" />
            </a>
            <a
              href="https://wa.me/+94775338747"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IoLogoWhatsapp className="contact__icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
