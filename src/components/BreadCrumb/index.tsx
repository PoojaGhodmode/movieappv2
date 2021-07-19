import { Link } from "react-router-dom";
//styles
import { Content, Wrapper } from "./BreadCrumb.styles";
//types

type Props = {
  movieTitle: string;
};

const BreadCrumb: React.FC<Props> = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
          <span>|</span>
          <span>{movieTitle}</span>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default BreadCrumb;
