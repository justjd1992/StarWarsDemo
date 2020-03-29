import { apiConfig } from './Utils';

const api = apiConfig('https://swapi.co/api/');

const starWars = () => {
  const people = () =>
    api.get('people');

  const getPerson = (id) =>
    api.get({ id });

  return {
    people,
    getPerson
  };
};

export default {
  starWars
};
