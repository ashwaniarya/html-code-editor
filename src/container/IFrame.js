import "./IFrame.css";

const IFrame = ({ srcDoc, style }) => {
  return (
    <iframe
      className={"iframe-container"}
      srcDoc={srcDoc}
      style={style}
      title={"preview"}
    />
  );
};

export default IFrame;
