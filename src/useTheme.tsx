import { useEffect, useState } from "react";

const useTheme = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    if (typeof window === "undefined") return false; // safety for SSR
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });

  useEffect(() => {
    // Apply theme to DOM
    const theme = darkTheme ? "dark" : "light";
    document.documentElement.style.setProperty("color-scheme", theme);
    document.documentElement.setAttribute("data-theme", theme);

    // Persist theme
    localStorage.setItem("theme", theme);
  }, [darkTheme]);

  return [darkTheme, setDarkTheme] as const;
};

export default useTheme;
