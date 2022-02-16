import axios from 'axios';

export const fetchComments = beatId => {
  return axios.get(`/api/comments/${beatId}`);
};

export const createComment = comment => {
  let formData = new FormData();
  for (let key in comment) {
    formData.append(key, comment[key])
    // formData[key] = beat[key]
  }
  return axios.post('/api/comments', formData, {headers: { "Content-Type": "multipart/form-data" }})
  // ({method: 'POST', url: '/api/comments', data: formData, headers: { "Content-Type": "multipart/form-data" }})
}

export const deleteComment = commentId => {
  return axios.delete(`/api/comments/${commentId}`)
}