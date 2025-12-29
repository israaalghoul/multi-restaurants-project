import { create } from 'zustand';
import { registerUser, verifyEmail } from '@/services/api';
import { toast } from 'react-toastify';

const useRegistrationStore = create((set) => ({
  loading: false,
  error: '',

  register: async (registrationData) => {
    set({ loading: true, error: '' });
    try {
      await registerUser(registrationData);
            toast.success('Register successfully');

      set({ loading: false });

      return true;
    } catch (err) {

      let errorMessage = 'Registration failed.';
      if (err.response?.data?.data) {
        errorMessage = Object.values(err.response.data.data).flat().join(' ');
      } else if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      }
            toast.error('Register failed');

      set({ loading: false, error: errorMessage });
      throw err;
    }
  },

  verify: async (email, code) => {
    set({ loading: true, error: '' });
    try {
      await verifyEmail(email, code);
      set({ loading: false });
      return true;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Invalid verification code.';
      set({ loading: false, error: errorMessage });
      throw err;
    }
  },
}));

export default useRegistrationStore;
