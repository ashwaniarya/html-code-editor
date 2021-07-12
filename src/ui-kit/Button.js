import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { AppThemeContext, themes } from "./theme-setup";
import Icon from "./Icon";
import "./ui.css";

const styles = {
  [themes.light]: { variant: "light", style: { border: "1px solid #c4c4c4" } },
  [themes.dark]: { variant: "dark", style: { border: "1px solid #7e7e7e" } },
};

const CustumButton = ({ onClick, icon, text, style, disabled, ...rest }) => {
  const [theme] = useContext(AppThemeContext);
  return (
    <Button
      variant={styles[theme]?.variant}
      onClick={onClick}
      disabled={disabled}
      style={{ ...{ display: "flex" }, ...styles[theme]?.style, ...style }}
      {...rest}
    >
      {icon && <Icon name={icon} style={{ marginRight: 8, marginTop: -2 }} />}
      {text}
    </Button>
  );
};

export default CustumButton;
