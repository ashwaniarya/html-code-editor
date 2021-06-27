import React, { useContext } from "react";
import { AppThemeContext, themes } from "./theme-setup";
import Navbar from "react-bootstrap/Navbar";
import Button from "./Button";

const styles = {
  bar: { [themes.light]: { bg: "light" }, [themes.dark]: { bg: "dark" } },
  title: {
    [themes.light]: { color: "#000" },
    [themes.dark]: { color: "#fff" },
  },
};

const NavHeader = ({ title, onChangeTheme, actionObjects }) => {
  const [theme] = useContext(AppThemeContext);

  return (
    <Navbar bg={styles.bar[theme].bg} expand="lg">
      <Navbar.Brand style={styles.title[theme]}>{title}</Navbar.Brand>
      {!!actionObjects && actionObjects}
    </Navbar>
  );
};

export default NavHeader;
