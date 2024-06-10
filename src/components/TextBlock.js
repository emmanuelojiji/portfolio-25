import "./TextBlock.scss";
import Image from "./Image";

const TextBlock = ({ heading, text, src, caption }) => {
  return (
    <div className="TextBlock">
      <h3>{heading}</h3>
      {src && <Image src={src} className="project-image" caption={caption} />}
      <div className="paragraph-text">{text}</div>
    </div>
  );
};

export default TextBlock;
