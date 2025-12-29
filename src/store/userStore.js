import { create } from 'zustand';
import { getProfile } from '@/services/api';

const useUserStore = create((set) => ({
  user: null, 
  loading: false,
  error: null,

  fetchProfile: async () => {
    set({ loading: true });
    try {
      const userData = await getProfile();
      set({ user: userData, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch user profile.', loading: false });
    }
  },

  clearUser: () => set({ user: null }),
}));

export default useUserStore;
