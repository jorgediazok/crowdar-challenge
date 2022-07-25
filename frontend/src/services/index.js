import axios from 'axios';

// const apiUrl = process.env.REACT_APP_APIURL;

const API = axios.create({
  baseURL: 'http://localhost:5000',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

//USERS SERVICES
export const signIn = (formData) => API.post(`/api/user/signin`, formData);
export const signUp = (formData) => API.post(`/api/user/signup`, formData);

//DOCUMENTS SERVICES
export const fetchDocuments = () => API.get(`/api/documents`);
export const fetchDocument = (id) => API.get(`/api/documents/${id}`);
export const createDocument = (newDocument) =>
  API.post('/api/documents', newDocument);
export const updateDocument = (id, updateDocument) =>
  API.put(`/api/documents/${id}`, updateDocument);
export const deleteDocument = (id) => API.delete(`/api/documents/${id}`);
