import React from 'react';
import './About.css';
import Footer from "../../components/Footer/Footer";
const About = () => {
  return (
    <main className="new-page">
      <h1>About</h1>

      <section>
        <h2>¿Qué es esto?</h2>
        <p>
          Este proyecto es una API sobre Dragon ball para un trabajo de clase
        </p>

      </section>

      <section>
        <h2>¿Quiénes son?</h2>
        <p>
          Mi nombre es Andres Stiven Alvarez Vera y el de mi compañero es xxxxxxx estudiantes de ingenieria de sistemas de x semestre
        </p>
      </section>

      <section>
        <h2>¿Por qué desarrollaron este proyecto?</h2>
        <p>
          En algun momento del semestre se nos encomendo hacer un proyecto para la clase sobre una API de Dragon Ball, por ello mi compañero y yo empezamos con el desarrollo de el proyecto
        </p>
      </section>

      <section>
        <h2>¿Derechos de autor?</h2>
        <p>
          Todos los personajes, imágenes y contenido relacionado con Dragon Ball que aparecen en esta página son propiedad de sus respectivos creadores.
          Todo el contenido mostrado en este sitio web esta sujeto a derechos de autor.
        </p>
      </section>
      <Footer></Footer>
    </main>

  );

};

export default About;