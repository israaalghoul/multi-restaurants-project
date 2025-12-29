import { create } from "zustand";
import {
  getCart,
  addToCart,
  updateCartItem,
  deleteCartItem,
} from "@/services/api";
import { toast } from 'react-toastify';

const useCartStore = create((set, get) => ({
  items: [],
  loading: false,
  error: null,
  activeRestaurantId: null,

  setActiveRestaurant: (restaurantId) => {
    if (get().activeRestaurantId !== restaurantId) {
      set({ activeRestaurantId: restaurantId });
    }
  },
  fetchCart: async () => {
    set({ loading: true });
    try {
      const cartItems = await getCart();
      set({ items: cartItems, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch cart.", loading: false });
    }
  },

  addItem: async (itemData,itemRestaurantId) => {
     const { items, activeRestaurantId } = get();
    if (activeRestaurantId !== null && itemRestaurantId !== activeRestaurantId) {
      toast.error('Product failed to created')
      set({ error: `You can only order from restaurant #${activeRestaurantId}.` });
      return;
    }
    const newProductId = parseInt(itemData.product_id, 10);
    const existingItem = items.find(
      (item) => parseInt(item.product.id, 10) === newProductId
    );

    set({ loading: true, error: null });

    try {
      if (existingItem) {
        toast.success('Product updated successfully')
        const newQuantity = existingItem.quantity + itemData.quantity;
        await updateCartItem(existingItem.id, { quantity: newQuantity });

      } else {
        toast.success('Product add successfully')
        await addToCart(itemData);
        
        if (activeRestaurantId === null) {
          set({ activeRestaurantId: itemRestaurantId });
        }
      }
      
      await get().fetchCart();

    } catch (error) {
      toast.error(error);
      set({ error: 'Failed to update cart.', loading: false });
    }
  },

  updateItem: async (itemId, updateData) => {
    toast.success('Product updated successfully')
    set({ loading: true });
    try {
      await updateCartItem(itemId, updateData);
      await get().fetchCart();
    } catch (error) {
      toast.error(error)
      set({ error: "Failed to update item.", loading: false });
    }
  },

  deleteItem: async (itemId) => {
    toast.success('Product delete successfully')
    set({ loading: true });
    try {
      await deleteCartItem(itemId);
      await get().fetchCart();
      if (get().items.length === 0) {
        set({ activeRestaurantId: null });
      }
    } catch (error) {
      toast.error(error);
      set({ error: "Failed to delete item.", loading: false });
    }
  },
  setActiveRestaurant: (restaurantId) => {
    set({ activeRestaurantId: restaurantId });
  },
  totalItems: () => get().items.length,
}));

export default useCartStore;
