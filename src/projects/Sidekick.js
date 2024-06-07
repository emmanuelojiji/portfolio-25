import Billboard from "../components/Billboard";
import billboard_1 from "../media/sidekick.jpg";
import TextBlock from "../components/TextBlock";

const Sidekick = () => {
  return (
    <>
      <Billboard src={billboard_1} />
      <TextBlock />
      <TextBlock />
      <TextBlock />
      <TextBlock />
    </>
  );
};

export default Sidekick;
