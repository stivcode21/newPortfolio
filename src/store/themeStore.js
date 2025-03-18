import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "dark",

  setTheme: (newTheme) =>
    set(() => {
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
}));
