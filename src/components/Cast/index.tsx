//styles
import { Wrapper, Image } from "./Cast.styles";

//types
type Props = {
  name: string;
  character: string;
  imageUrl: string;
};

const Cast: React.FC<Props> = ({ name, character, imageUrl }) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character ? `as ${character}` : null}</p>
    </Wrapper>
  );
};

export default Cast;
