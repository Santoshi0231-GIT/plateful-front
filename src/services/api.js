import axios from 'axios';

// Base URL for your backend API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance with default configurations
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Menu API endpoints
export const menuAPI = {
  // Get all menu items
  getAllItems: () => api.get('/menu/items'),
  
  // Get items by category
  getItemsByCategory: (category) => api.get(`/menu/items/category/${category}`),
  
  // Get single item
  getItemById: (id) => api.get(`/menu/items/${id}`),
  
  // Create new item (admin only)
  createItem: (itemData) => api.post('/menu/items', itemData),
  
  // Update item (admin only)
  updateItem: (id, itemData) => api.put(`/menu/items/${id}`, itemData),
  
  // Delete item (admin only)
  deleteItem: (id) => api.delete(`/menu/items/${id}`),
};

// Order API endpoints
export const orderAPI = {
  // Create new order
  createOrder: (orderData) => api.post('/orders', orderData),
  
  // Get user orders
  getUserOrders: (userId) => api.get(`/orders/user/${userId}`),
  
  // Get order by ID
  getOrderById: (id) => api.get(`/orders/${id}`),
  
  // Update order status (admin only)
  updateOrderStatus: (id, status) => api.put(`/orders/${id}/status`, { status }),
  
  // Get all orders (admin only)
  getAllOrders: () => api.get('/orders'),
};

// User API endpoints
export const userAPI = {
  // User registration
  register: (userData) => api.post('/auth/register', userData),
  
  // User login
  login: (credentials) => api.post('/auth/login', credentials),
  
  // Get user profile
  getProfile: () => api.get('/auth/profile'),
  
  // Update user profile
  updateProfile: (userData) => api.put('/auth/profile', userData),
  
  // Change password
  changePassword: (passwordData) => api.put('/auth/change-password', passwordData),
  
  // Logout
  logout: () => api.post('/auth/logout'),
};

// Contact API endpoints
export const contactAPI = {
  // Submit contact form
  submitContact: (contactData) => api.post('/contact', contactData),
  
  // Get all contact messages (admin only)
  getAllMessages: () => api.get('/contact/messages'),
  
  // Mark message as read (admin only)
  markAsRead: (id) => api.put(`/contact/messages/${id}/read`),
};

// Newsletter API endpoints
export const newsletterAPI = {
  // Subscribe to newsletter
  subscribe: (email) => api.post('/newsletter/subscribe', { email }),
  
  // Unsubscribe from newsletter
  unsubscribe: (email) => api.post('/newsletter/unsubscribe', { email }),
  
  // Get all subscribers (admin only)
  getAllSubscribers: () => api.get('/newsletter/subscribers'),
};

// Analytics API endpoints (admin only)
export const analyticsAPI = {
  // Get dashboard stats
  getDashboardStats: () => api.get('/analytics/dashboard'),
  
  // Get sales report
  getSalesReport: (period) => api.get(`/analytics/sales/${period}`),
  
  // Get popular items
  getPopularItems: () => api.get('/analytics/popular-items'),
  
  // Get customer insights
  getCustomerInsights: () => api.get('/analytics/customers'),
};

// Admin API endpoints
export const adminAPI = {
  // Get all users
  getAllUsers: () => api.get('/admin/users'),
  
  // Update user role
  updateUserRole: (userId, role) => api.put(`/admin/users/${userId}/role`, { role }),
  
  // Delete user
  deleteUser: (userId) => api.delete(`/admin/users/${userId}`),
  
  // Get system settings
  getSettings: () => api.get('/admin/settings'),
  
  // Update system settings
  updateSettings: (settings) => api.put('/admin/settings', settings),
};

// Utility functions
export const uploadImage = (file) => {
  const formData = new FormData();
  formData.append('image', file);
  
  return api.post('/upload/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default api;
