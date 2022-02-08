import axios from 'axios';

export const fetchBeats = (userData) => {
  return axios.get('/api/beats/', userData);
};

// export const login = (userData) => {
//   return axios.post('/api/users/login', userData);
// };