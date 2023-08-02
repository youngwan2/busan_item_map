import { createContext } from "react";

export const DarkThemeContext = createContext({
    bgColor: '#191918',
    fnColor: '#FFFFFF'
});

export const LightThemeContext = createContext({
    bgColor: '#FFFFFF',
    fnColor: '#191918'
});

