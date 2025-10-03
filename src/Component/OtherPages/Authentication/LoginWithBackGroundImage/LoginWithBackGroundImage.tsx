import { Col, Container, Row } from "reactstrap";
import { dynamicImage } from "../../../../Service";
import LoginForm from "../Common/LoginForm";
import RatioImage from "../../../../CommonElements/RatioImage";

const LoginWithBackGroundImageContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="7" className="login_one_image">
          <RatioImage className="bg-img-cover bg-center" src={dynamicImage("login/2.jpg")} alt="loginpage" />
        </Col>
        <Col xl="5" className="p-0">
          <LoginForm alignLogo="text-center" />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginWithBackGroundImageContainer;
