import React from "react";
const themes = { light: "light", dark: "dark" };
const AppThemeContext = React.createContext(themes.light);

export { AppThemeContext, themes };
