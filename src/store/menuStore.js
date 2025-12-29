import { create } from 'zustand';
import { getCategories ,getProductsByCategory } from "@/services/api";

const useMenuStore = create((set) => ({
  categories: [],      
  products: [],   
  loadingCategories: false,
  loadingProducts: false,
  error: null,

  fetchCategories: async (adminId) => {
    set({ loadingCategories: true, error: null });
    try {
      const fetchedCategories = await getCategories(adminId);
      set({ categories: fetchedCategories, loadingCategories: false });
    } catch (err) {
      set({ error: 'Failed to load categories.', loadingCategories: false });
    }
  },
  fetchProducts: async (restaurantAdminId, categoryId) => {
    set({ loadingProducts: true, error: null, products: [] });
    try {
      const fetchedProducts = await getProductsByCategory(restaurantAdminId, categoryId);
      set({ products: fetchedProducts, loadingProducts: false });
    } catch (err) {
      set({ error: 'Failed to load products.', loadingProducts: false });
    }
  },
}));

export default useMenuStore;
