import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Accept-Language': 'ar'
  }
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export const loginUser = async (email, password) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  try {
    const response = await api.post('/auth/login', formData);
     const token = response.data?.data?.access_token;

    if (token) {
      localStorage.setItem('authToken', token);
      return token;
    } else {
      throw new Error('Access token not found in API response.');
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    }

    throw error;
  }
};

export const registerUser = async (registrationData) => {
  const formData = new FormData();

  Object.keys(registrationData).forEach(key => {
    formData.append(key, registrationData[key]);
  });

  try {
    const response = await api.post('/auth/register', formData);
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error.response ? error.response.data : error.message);
    throw error;
  }
};
export const verifyEmail = async (email, code) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('code', code);

  try {
    const response = await api.post('/auth/customer/verify', formData);
    return response.data;
  } catch (error) {
    console.error('Email verification failed:', error.response ? error.response.data : error.message);
    throw error;
  }
};
// Active Restaurant
export const activateRestaurant = async (adminId) => {
  try {
    const response = await api.get('/restaurants/settings', {
      params: {
        restaurant_admin_id: adminId
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error activating/fetching restaurant settings:', error.response ? error.response.data.message : error.message);
    throw error;
  }
};
// Category
export const getCategories = async (adminId) => {
  try {
    const response = await api.get('/categories', {
      params: {
        restaurant_admin_id: adminId,
      }
    });
    return response.data?.data || [];

  } catch (error) {
    console.error('Failed to fetch categories:', error.response ? error.response.data : error.message);
    throw error;
  }
};
export const getProductsByCategory = async (restaurantAdminId, categoryId) => {
  try {
    const response = await api.get('/products', {
      params: {
        restaurant_admin_id: restaurantAdminId,
        category_id: categoryId,
        sort_term: 'asc',
        sort_by: 'name'
      }
    });

    // console.log("--- DEBUG: PRODUCTS API RESPONSE ---");
    // console.log("Full response.data:", response.data);
    
    let products = [];
    if (response.data && Array.isArray(response.data.data)) {
      products = response.data.data;
    }
    else if (Array.isArray(response.data)) {
      products = response.data;
    }
    // console.log("Extracted products:", products);
    return products;

  } catch (error) {
    console.error('Failed to fetch products:', error.response ? error.response.data : error.message);
    throw error;
  }
};
// Cart
export const getCart = async () => {
  try {
    const response = await api.get('/carts');
    return response.data?.data || [];
  } catch (error) {
    console.error('Failed to fetch cart:', error.response?.data);
    throw error;
  }
};

export const addToCart = async (cartData) => {
   try {
    const response = await api.post('/carts', cartData);
    return response.data;
  } catch (error) {
    console.error("--- FULL AXIOS ERROR ---");
    console.error("Failed to add to cart. Analyzing the failed request...");
    if (error.response) {
      console.log("Server Response (What the server sent back):", error.response.data);
      console.log("Status Code:", error.response.status);
      console.log("Response Headers:", error.response.headers);
    } else if (error.request) {
      console.log("No response received. The request was:", error.request);
    } else {
      console.log('Error setting up the request:', error.message);
    }
    console.log("Request Config (What we TRIED to send):", error.config);
    throw error;
  }
};

export const updateCartItem = async (cartItemId, updateData) => {
  try {
    const response = await api.put(`/carts/${cartItemId}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Failed to update cart item:', error.response?.data);
    throw error;
  }
};

export const deleteCartItem = async (productId) => {
  try {
    
    const response = await api.delete(`/carts/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete cart item:', error.response?.data);
    throw error;
  }
};