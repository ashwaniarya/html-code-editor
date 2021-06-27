import React, { useContext } from "react";
import { AppThemeContext, themes } from "./theme-setup";
import "./ui.css";
import {
  FaBeer,
  FaMoon,
  FaSun,
  FaFileDownload,
  FaTimesCircle,
  FaPlay,
} from "react-icons/fa";

const Icon = ({ name, style }) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case "FaBeer":
        return <FaBeer />;
      case "FaMoon":
        return <FaMoon />;
      case "FaSun":
        return <FaSun />;
      case "FaFileDownload":
        return <FaFileDownload />;
      case "FaTimesCircle":
        return <FaTimesCircle />;
      case "FaPlay":
        return <FaPlay />;
      default:
        return null;
    }
  };

  return <div style={style}>{renderIcon(name)}</div>;
};

export default Icon;
