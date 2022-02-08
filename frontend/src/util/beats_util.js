import axios from 'axios';

export const fetchBeats = userId => {
  return axios.get('/api/beats', userId);
};

export const fetchBeat = beatId => {
  return axios.get('/api/beats', beatId)
}

export const fetchAllBeats = () => {
  return axios.get('/api/beats')
}