import { create } from "zustand";

type State = { isShowing: boolean, description: string };
type Actions = {
  setError: (errorMessage:string) => void;
  clearError: () => void;
};

export const useStore = create<State & Actions>((set) => ({
  isShowing: false,
  description: "",
  setError: (errorMessage) =>
    set({ isShowing: true, description: errorMessage }),
  clearError: () => set({ isShowing: false, description: "" }),
  //updateBears: (newBears) => set({ bears: newBears }),
}));
