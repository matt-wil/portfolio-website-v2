"use client";

import { useState, useEffect } from "react";

const THEMES = [
  { name: "catppuccin", label: "Catppuccin" },
  { name: "gruvbox", label: "Gruvbox" },
  { name: "tokyo-night", label: "Tokyo Night" },
];

const STORAGE_KEY = "dev-theme";
const DEFAULT_THEME = "catppuccin";

export function DevThemeChanger() {
  const [activeTheme, setActiveTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    setActiveTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-dev-theme", activeTheme);
    localStorage.setItem(STORAGE_KEY, activeTheme);
  }, [activeTheme]);

  return (
    <div className="flex items-center gap-2 rounded-lg bg-dev-surface0 p-2">
      <span className="text-dev-subtext text-sm font-medium">Theme:</span>

      {THEMES.map((theme) => {
        const isActive = theme.name === activeTheme;

        return (
          <button
            key={theme.name}
            data-theme={theme.name}
            className={`theme-button rounded px-3 py-1 text-sm ${
              isActive ? "active" : ""
            }`}
            onClick={() => setActiveTheme(theme.name)}
            aria-pressed={isActive}
          >
            {theme.label}
          </button>
        );
      })}
    </div>
  );
}
