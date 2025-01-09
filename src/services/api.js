import axios from "axios";

const api_url = "https://swapi.py4e.com/api/";

export const getPeople = async (page = 0) => {
  const { data } = await axios.get(api_url + "people?page=" + page);
  return data;
};

export const getHomeWorld = async (url) => {
  const { data } = await axios.get(url);
  return data.name;
};

export const getSpecies = async (species) => {
  const data = await Promise.all(species.map((url) => axios.get(url)));
  return data;
};

export const getFilms = async (films) => {
  const data = await Promise.all(films.map((url) => axios.get(url)));
  return data;
};

export const getStarships = async (starships) => {
  const data = await Promise.all(starships.map((url) => axios.get(url)));
  return data;
};

export const getVehicles = async (vehicles) => {
  const data = await Promise.all(vehicles.map((url) => axios.get(url)));
  return data;
};
