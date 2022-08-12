import React from "react";
import Image from "../assets/gym/gym2.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img className="image__values" src={Image} alt="imagevalue" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vero
            possimus, nostrum nobis velit quam neque aliquam eaque maxime minus
            natus dolores, cumque doloremque? Dolore unde inventore quisquam
            necessitatibus excepturi, debitis aliquid ea incidunt tempore
            cupiditate maxime odio. Omnis, temporibus non officiis debitis
            laboriosam facilis ipsam magni vitae. Vero, sapiente.
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
