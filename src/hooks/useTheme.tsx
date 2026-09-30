import { useState } from "react";

export type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = (): void => {
    const next: Theme = theme === "light" ? "dark" : "light";

    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Sin acceso al storage el tema solo dura hasta recargar la página
    }

    setTheme(next);
  };

  return [theme, toggleTheme];
}
