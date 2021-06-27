import React, { useContext } from "react";
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
  return (
    <div
      className={
        className
          ? `${styles.div[theme]?.className} ${className}`
          : styles.div[theme]?.className
      }
      {...rest}
    >
      {children}
    </div>
  );
};

export default View;
