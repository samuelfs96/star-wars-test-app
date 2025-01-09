import { useState } from "react";
import {
  getFilms,
  getHomeWorld,
  getSpecies,
  getStarships,
  getVehicles,
} from "../services/api";

export const useCharacterModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [character, setCharacter] = useState({});

  const handleOpenModal = (character) => {
    setAttr(character);
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);

  const setAttr = async ({...character}) => {
    try {
      const homeworld_name = await getHomeWorld(character.homeworld);
      const species = await getSpecies(character.species);
      const films = await getFilms(character.films);
      const starships = await getStarships(character.starships);
      const vehicles = await getVehicles(character.vehicles);
      character.homeworld = homeworld_name;
      character.species = species.map(({ data }) => data.name);
      character.films = films.map(({ data }) => data.title);
      character.starships = starships.map(({ data }) => data.name);
      character.vehicles = vehicles.map(({ data }) => data.name);
      setCharacter(character);
    } catch (error) {
      console.log("Something is wrong: ", error);
    }
  };

  return {
    openModal,
    handleOpenModal,
    handleCloseModal,
    character,
  };
};
