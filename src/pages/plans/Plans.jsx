import React from "react";
import "./plans.css";
import { plans } from "../../data";
import Header from "../../components/Header";
import HeaderImage from "../../assets/header/gym3.jpg";
import Card from "../../UI/Card";

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        quod reprehenderit accusamus facilis et commodi, inventore quam suscipit
        necessitatibus neque non rem illo dicta dolor quasi totam adipisci
        tempore ad asperiores? Id explicabo accusantium quibusdam? Saepe quam
        quibusdam corrupti tenetur sint, in exercitationem dolorum molestiae
        similique est nesciunt quis distinctio.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, feactures }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>Feactures</h4>
                {feactures.map(({ feacture, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feacture}
                    </p>
                  );
                })}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
