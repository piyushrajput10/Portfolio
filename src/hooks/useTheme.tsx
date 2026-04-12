import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function useTheme() {
  // 🔥 Lazy initialization (no extra render)
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });


  // ✅ Sync with DOM + localStorage (side effects only)
  useEffect(() => {

    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    
  }, [theme]);


  // 🔁 Toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    
  };
  

  return { theme, toggleTheme };
}