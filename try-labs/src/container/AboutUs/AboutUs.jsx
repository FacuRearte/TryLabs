import React from "react";

import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    {/* <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div> */}
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">¿Quiénes somos?</h1>
        <p className="p__opensans">
          Somos una desarrolladora de software, capaces de crear la página que
          necesita tu empresa en poco tiempo y con las mejores tecnologías del
          mercado. Adaptándonos a sus necesidades y preferencias, para ofercer
          el mejor servicio posible.
        </p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">¿Por qué elegirnos?</h1>
        <p className="p__opensans">
          En TryLabs Solutions, ofrecemos un producto adaptable a su presupuesto
          y tiempo disponible, al precio más competitivo del mercado, siempre
          manteniendo una relación estrecha entre nuestros desarrolladores y el
          cliente, para que el producto sea de calidad excelente y el cliente
          esté satisfecho con el trabajo realizado.
        </p>
      </div>
      
    </div>
  </div>
);

export default AboutUs;
