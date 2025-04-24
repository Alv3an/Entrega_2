import * as React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import "./CharCard.css";

const CharCard = ({
  img,
  nombre,
  especie,
  baseKi,
  totalKi,
  affiliation,
  description,
  gender,
  className,
  showImage = true, // ← aquí lo estás inicializando correctamente
}) => {
  return (
    <Box className={`charCard ${className || ''}`}>
      {showImage && (
        <Box className="imageContainer">
          <img
            className="characterImage"
            src={img}
            alt={nombre}
          />
        </Box>
      )}
      <Box className="contentContainer">
        <Typography variant="h5" className="characterName">
          {nombre}
        </Typography>
        <Typography variant="body1" className="characterSpecies">
          {especie}
        </Typography>
        <Stack className="characterStats">
          <Box>
            <Typography variant="body2" className="statLabel">Género:</Typography>
            <Typography variant="body2" className="statValue">{gender}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" className="statLabel">Base KI:</Typography>
            <Typography variant="body2" className="statValue">{baseKi}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" className="statLabel">Total KI:</Typography>
            <Typography variant="body2" className="statValue">{totalKi}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" className="statLabel">Afiliación:</Typography>
            <Typography variant="body2" className="statValue">{affiliation}</Typography>
          </Box>
          <Box className="characterDescription">
            <Typography variant="body2" className="statLabel">Descripción:</Typography>
            <Typography variant="body2" className="statValue">{description}</Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default CharCard;