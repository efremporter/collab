import axios from 'axios';

export const fetchComments = beatId => {
  return axios.get(`/api/comments/${beatId}`);
};

// export const fetchComment = commentId => {
//   return axios.get(`/api/comments/${commentId}`)
// }

export const createComment = comment => {
  let formData = new FormData();
  for (let key in comment) {
    formData.append(key, comment[key])
    // formData[key] = beat[key]
  }
  return axios.post('/api/comments', formData, {headers: { "Content-Type": "multipart/form-data" }})
  // ({method: 'POST', url: '/api/comments', data: formData, headers: { "Content-Type": "multipart/form-data" }})
}

export const deleteBeat = beatId => {
  return axios.delete(`/api/comments/${beatId}`)
}