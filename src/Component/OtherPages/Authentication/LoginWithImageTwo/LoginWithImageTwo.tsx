import { Col, Container, Row } from 'reactstrap'
import RatioImage from '../../../../CommonElements/RatioImage'
import { dynamicImage } from '../../../../Service'
import LoginForm from '../Common/LoginForm'

const LoginWithImageTwoContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="5" >
          <RatioImage className="bg-img-cover bg-center" src={dynamicImage("login/3.jpg")} alt="loginpage" />
        </Col>
        <Col xl="7" className="p-0">
          <LoginForm alignLogo="text-center" />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginWithImageTwoContainer