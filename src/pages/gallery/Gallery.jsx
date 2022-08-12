import React from "react";
import "./gallery.css";
import Header from "../../components/Header";
import HeaderImage from "../../assets/header/gym3.jpg";

const Gallery = () => {
  const galleryLength = 9;
  const images = [];
  for (let i = 1; i < galleryLength; i++) {
    images.push(require(`../../assets/gallery/galary${i}.jpg`));
  }
  console.log(images);
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quasi
        placeat maiores eveniet quidem ducimus dicta iusto? Aspernatur
        perferendis modi culpa dicta, repellendus explicabo in expedita
        voluptatibus vitae, officia nobis delectus corrupti amet! Dignissimos,
        voluptates vitae debitis, nihil corporis, voluptate at consequatur iusto
        eligendi harum fuga. Quas eaque praesentium reprehenderit!
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index} className="card">
                <img className="gallery__image" src={image} alt={`GalleryImage ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
