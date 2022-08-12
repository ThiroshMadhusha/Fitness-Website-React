import React from "react";
import Header from "../../components/Header";
import "./about.css";
import HeaderImage from "../../assets/header/gym3.jpg";
import StoryImage from "../../assets/gym/gym1.jpg";
import VisionImage from "../../assets/gym/gym2.jpg";
import MissionImage from "../../assets/gym/gym3.jpg";



const About = () => {
  return (
    <>
      <Header title="About US" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
        assumenda totam placeat exercitationem laudantium est, quibusdam,
        reiciendis ab consequuntur accusantium nemo doloremque sequi asperiores.
        Quia nobis quibusdam repudiandae blanditiis unde dolorum eos esse ullam
        minima nisi, et ipsam. Numquam molestias perspiciatis enim iure animi
        distinctio quisquam est explicabo officiis maxime.
      </Header>

      {/* Story */}
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="aboutImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, sed illo. Dolore reiciendis commodi, voluptate odio,
              aut accusantium ratione magnam sed repellendus et assumenda
              maxime. Explicabo nobis vel sunt, rem ab dolorem nesciunt
              perferendis totam eum debitis numquam autem iste, eos optio modi
              quidem repellat earum beatae et quisquam facere.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, sed illo. Dolore reiciendis commodi, voluptate odio,
              aut accusantium ratione magnam sed repellendus et assumenda
              maxime. Explicabo nobis vel sunt, rem ab dolorem nesciunt
              perferendis totam eum debitis numquam autem iste, eos optio modi
              quidem repellat earum beatae et quisquam facere.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, sed illoeos optio modi quidem repellat earum beatae et
              quisquam facere.
            </p>
          </div>
        </div>
      </section>
      {/* Our Vision */}
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, sed illo. Dolore reiciendis commodi, voluptate odio,
              aut accusantium ratione magnam sed repellendus et assumenda
              maxime. Explicabo nobis vel sunt, rem ab dolorem nesciunt
              perferendis totam eum debitis numquam autem iste, eos optio modi
              quidem repellat earum beatae et quisquam facere.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, sed illoeos optio modi quidem repellat earum beatae et
              quisquam facere.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="aboutImage" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="aboutImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, sed illo. Dolore reiciendis commodi, voluptate odio,
              aut accusantium ratione magnam sed repellendus et assumenda
              maxime. Explicabo nobis vel sunt, rem ab dolorem nesciunt
              perferendis totam eum debitis numquam autem iste, eos optio modi
              quidem repellat earum beatae et quisquam facere.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, sed illo. Dolore reiciendis commodi, voluptate odio,
              aut accusantium ratione magnam sed repellendus et assumenda
              maxime. Explicabo nobis vel sunt, rem ab dolorem nesciunt
              perferendis totam eum debitis numquam autem iste, eos optio modi
              quidem repellat earum beatae et quisquam facere.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, sed illoeos optio modi quidem repellat earum beatae et
              quisquam facere.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
