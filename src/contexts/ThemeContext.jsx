import { createContext, useState, useContext } from 'react';
import { PropTypes } from 'prop-types';

/*  NOTE:
    This pattern is called an enum. This way we are never using a string
    to set the theme. Object.freeze ensures you can not add properties */
export const Theme = Object.freeze({
  light: 'light',
  dark: 'dark',
  // Could add more themes at a later date
});

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(Theme.light);

  const toggleTheme = () => {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
  };

  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.any,
};

export { ThemeContextProvider };

export const useTheme = () => {
  return useContext(ThemeContext);
};
