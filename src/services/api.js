import axios from "axios";

const api_url = "https://swapi.py4e.com/api/";

export const getPeople = async (page = 0) => {
  const { data } = await axios.get(api_url + "people?page=" + page);
  return data;
};
