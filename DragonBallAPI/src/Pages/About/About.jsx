import React from 'react';
import './About.css';
import Footer from "../../Components/Footer/Footer";
const About = () => {
  return (
    <main className="new-page">
      <h1>About</h1>

      <section>
        <h2>¿Qué es esto?</h2>
        <p>

        </p>

      </section>

      <section>
        <h2>¿Quién eres?</h2>
        <p>

        </p>
      </section>

      <section>
        <h2>¿Por qué construiste esto?</h2>
        <p>

        </p>
      </section>

      <section>
        <h2>¿Cosas técnicas?</h2>
        <p>

        </p>
      </section>

      <section>
        <h2>¿Derechos de autor?</h2>
        <p>
          Todos los personajes, imágenes y contenido relacionado de Dragon Ball que aparecen en este proyecto son propiedad de sus respectivos creadores.
          Este proyecto es una iniciativa implementada en base a la api  para los fans y no busca infringir los derechos de Dragon Ball.
          Todo el contenido mostrado en este sitio web esta sujeto a derechos de autor

        </p>
      </section>
      <Footer></Footer>
    </main>

  );

};

export default About;