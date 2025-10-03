import { H6, Image, P } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";

const TodoUserProfile = () => {
  return (
    <div className="d-flex align-items-center flex-wrap">
      <div className="media-size-email">
        <Image className="me-3 img-40 rounded-circle" src={dynamicImage(`avatar/1.jpg`)} alt="avatar" />
      </div>
      <div className="flex-grow-1">
        <H6 className="f-w-600">{"Mark Jecno"}</H6>
        <P>{"Markjecno@gmail.com"}</P>
      </div>
    </div>
  );
};

export default TodoUserProfile;
