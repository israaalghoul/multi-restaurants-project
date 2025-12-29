import { create } from 'zustand';
import { loginUser as apiLogin } from "@/services/api";
import { toast } from 'react-toastify';

const useAuthStore = create((set, get) => ({

  token: localStorage.getItem('authToken') || null,
  loading: false,
  error: '',


  login: async (email, password) => {

    set({ loading: true, error: '' });
    try {
      const token = await apiLogin(email, password);
      localStorage.setItem('authToken', token);
      toast.success('Login successfully');
      set({ token, loading: false }); 
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Login failed.';
      toast.error('Login failed');

      set({ error: errorMessage, loading: false }); 
      throw err; 
    }
  },

  logout: () => {
   toast.success('Logout successfully');
    localStorage.removeItem('authToken');
    set({ token: null }); 
  },
}));

export default useAuthStore;
