import React from "react";
import "./trainers.css";
import Header from "../../components/Header";
import HeaderImage from "../../assets/header/gym3.jpg";
import { trainers } from "../../data";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Trainer from "../../components/Trainer";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio
        pariatur tempora voluptatem distinctio rem ducimus illum sequi
        accusantium expedita. Sunt quis voluptas sint impedit voluptatum
        accusamus sed ad eos soluta alias numquam dolor maxime officia, est unde
        explicabo molestias neque nemo quos itaque veritatis blanditiis quas
        aliquam? Recusandae, praesentium.
      </Header>

      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({ id, image, name, job, socials }) => {
              return <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  {
                    icon: <BsInstagram />,
                    link: socials[0],
                  },
                  {
                    icon: <AiOutlineTwitter />,
                    link: socials[1],
                  },
                  {
                    icon: <FaFacebook />,
                    link: socials[2],
                  },
                  {
                    icon: <FaLinkedinIn />,
                    link: socials[3],
                  },
                ]}
              />;            })
          }
        </div>
      </section>
    </>
  );
};

export default Trainers;
