import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { AppThemeContext, themes } from "./theme-setup";

const styles = {
  [themes.light]: { variant: "light" },
  [themes.dark]: { variant: "dark" },
};

const CustumButton = ({ onClick, text, style, ...rest }) => {
  const [theme] = useContext(AppThemeContext);
  return (
    <Button
      variant={styles[theme].variant}
      onClick={onClick}
      style={style}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default CustumButton;
