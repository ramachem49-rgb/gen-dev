import api from './axios';

export const authAPI = {
  login: (data: { email: string; password: string }) => 
    api.post('/auth/login', data),
  register: (data: { name: string; email: string; password: string }) => 
    api.post('/auth/register', data),
  logout: () => api.post('/auth/logout'),
};

export const courseAPI = {
  getCourses: () => api.get('/courses'),
  getCourseById: (id: string) => api.get(`/courses/${id}`),
  createCourse: (data: any) => api.post('/courses', data),
  updateCourse: (id: string, data: any) => api.put(`/courses/${id}`, data),
  deleteCourse: (id: string) => api.delete(`/courses/${id}`),
};

export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data: any) => api.put('/users/profile', data),
};