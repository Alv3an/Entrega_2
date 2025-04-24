import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";

import CharCard from '../../components/CharCard/CharCard';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=100")
      .then(response => response.json())
      .then(result => {
        setData(result.items);
      })
      .catch(error => console.error("Error al obtener los personajes:", error));
  }, []);

  return (
    <main id='home-page'>
      <div>
        <h1 class="title">HOME PAGE</h1>
      </div>
      <div id='characters'>
        {
          data.map((element) =>
            <div key={element.id}>
              <Link to={"/details/" + element.id}>
                <CharCard
                  img={element.image}
                  nombre={element.name}
                  especie={element.race}
                  gender={element.gender}
                  baseKi={element.ki}
                  totalKi={element.maxKi}
                  affiliation={element.affiliation}
                />
              </Link>
            </div>
          )
        }
      </div>
    </main>
  );
}

export default HomePage;