import axios from 'axios';

export const fetchBeats = userId => {
  return axios.get(`/api/beats/${userId}`, userId);
};

export const fetchBeat = beatId => {
  return axios.get('/api/beats/:beat_id', beatId)
}

export const fetchAllBeats = () => {
  return axios.get('/api/beats')
}

export const createBeat = beat => {
  return axios.post('/api/beats', beat)
}