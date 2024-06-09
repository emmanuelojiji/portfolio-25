import "./TextBlock.scss";

const TextBlock = ({ heading, text }) => {
  return (
    <div className="TextBlock">
      <h3>{heading}</h3>

      <div className="paragraph-text">{text}</div>
    </div>
  );
};

export default TextBlock;
