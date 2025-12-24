import { create } from "zustand";

export const usePopupStore = create((set) => ({
  modal: null, 

  openSignUp: () => set({ modal: "signup" }),
  openLogin: () => set({ modal: "login" }),
  closeModal: () => set({ modal: null }),
}));
