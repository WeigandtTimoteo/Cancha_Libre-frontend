import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getPartidosArgentinos = async () => {
  const response = await axios.get(`${API_URL}/partidos-ar/`);
  return response.data;
};