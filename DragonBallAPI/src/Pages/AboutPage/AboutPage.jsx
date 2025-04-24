import "./AboutPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import CharCard from "../../components/CharCard/CharCard";

const AboutPage = () => {
  const [data, setData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then(response => response.json())
      .then(char => setData(char))
      .catch(error => console.error("Error al obtener el personaje:", error));
  }, []);

  return (
    <main id='about-page'>
      <h1 className="title">CHARACTER PAGE</h1>
      <CharCard className='charCard-expanded'
        showImage={true}
        img={data.image}
        nombre={data.name}
        especie={data.race}
        gender={data.gender}
        baseKi={data.ki}
        totalKi={data.maxKi}
        affiliation={data.affiliation}
        description={data.description}
      />
    </main>
  );
};

export default AboutPage;