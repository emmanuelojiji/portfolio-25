import "./Image.scss"

const Image = ({ src, caption }) => {
  return (
    <figure className="textBlockContainer">
      <img className="textBlockImage" src={src}></img>
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default Image;
