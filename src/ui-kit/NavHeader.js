import React, { useContext } from "react";
import { AppThemeContext, themes } from "./theme-setup";
import Navbar from "react-bootstrap/Navbar";
const styles = {
  bar: { [themes.light]: { bg: "light" }, [themes.dark]: { bg: "dark" } },
  title: {
    [themes.light]: { color: "#000" },
    [themes.dark]: { color: "#fff" },
  },
};

const NavHeader = ({ title }) => {
  const [theme] = useContext(AppThemeContext);

  return (
    <Navbar bg={styles.bar[theme].bg} expand="lg">
      <Navbar.Brand style={styles.title[theme]}>{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
};

export default NavHeader;
