import axios from 'axios';

export const fetchBeats = userId => {
  return axios.get(`/api/beats/${userId}`);
};

export const fetchBeat = beatId => {
  return axios.get(`/api/beats/${beatId}`)
}

export const fetchAllBeats = () => {
  return axios.get('/api/beats')
}

export const createBeat = beat => {
  console.log('UTIL')
  let formData = new FormData();
  for (let key in beat) {
    formData.append(key, beat[key])
    // formData[key] = beat[key]
  }
  return axios.post('/api/beats', formData, {headers: { "Content-Type": "multipart/form-data" }})
  // ({method: 'POST', url: '/api/beats', data: formData, headers: { "Content-Type": "multipart/form-data" }})
}

export const deleteBeat = beatId => {
  return axios.delete(`/api/beats/${beatId}`)
}