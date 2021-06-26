import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import { AppThemeContext, themes } from "./theme-setup";
import "./ui.css";

const styles = {
  div: {
    [themes.light]: { className: "cust-div" },
    [themes.dark]: { className: "cust-div-dark" },
  },
};

const View = ({ className, children, ...rest }) => {
  const [theme] = useContext(AppThemeContext);
  console.log(styles.div[theme].className);
  return (
    <div
      className={
        className
          ? `${styles.div[theme].className} ${className}`
          : styles.div[theme].className
      }
      {...rest}
    >
      {children}
    </div>
  );
};

export default View;
