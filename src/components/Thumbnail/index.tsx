import { Link } from "react-router-dom";
//styles
import { Image } from "./Thumbnail.styles";

//types
type Props = {
  image: string;
  movieId?: number;
  clickable: boolean;
};

const Thumbnail: React.FC<Props> = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
    </div>
  );
};

export default Thumbnail;
