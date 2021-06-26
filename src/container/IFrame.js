import "./IFrame.css";

const IFrame = ({ srcDoc, style }) => {
  return (
    <iframe className={"iframe-container"} srcDoc={srcDoc} style={style} />
  );
};

export default IFrame;
