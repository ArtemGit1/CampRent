import axios from 'axios';

const BASE_URL = 'https://65788e5af08799dc804597fa.mockapi.io';

export const fetchCampers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/contacts/adverts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching campers:', error);
    return [];
  }
};
