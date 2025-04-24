import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CharCard from "../../components/CharCard/CharCard"; 
import "./CharacterPage.css";

const CharacterPage = () => {
  const { gender, race } = useParams(); 
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?limit=100")
      .then((response) => response.json())
      .then((data) => {
        let filtered = data.items;

        // Filtro por género
        if (gender) {
          const genderLower = gender.toLowerCase();
          filtered = filtered.filter(
            (char) => char.gender?.toLowerCase() === genderLower
          );
        }
        setCharacters(filtered);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [gender]);

  return (
    <div id="character-page">
      <h1 class='title'> PERSONAJES</h1>
      {race && <p>Raza: {race}</p>}

      <div id="characters-list">
        {characters.length === 0 ? (
          <p>No se encontraron personajes con estos filtros.</p>
        ) : (
          characters.map((character) => (
            <CharCard
              key={character.id}
              img={character.image}
              nombre={character.name}
              especie={character.race}
              gender={character.gender}
              affiliation={character.affiliation}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CharacterPage;