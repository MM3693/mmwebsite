import { create } from "zustand";

const useAppStore = create((set) => ({
  usersOnline: 0,
  setUsersOnline: (usersOnline) => set({ usersOnline }),
}));

export default useAppStore;
