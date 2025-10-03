import { Col, Container, Row } from 'reactstrap'
import RatioImage from '../../../../CommonElements/RatioImage'
import { dynamicImage } from '../../../../Service'
import LoginForm from '../Common/LoginForm'

const LoginWithValidationContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="7" className="login_bs_validation">
          <RatioImage className="bg-img-cover bg-center" src={dynamicImage("login/1.jpg")} alt="loginpage" />
        </Col>
        <Col xl="5" className='p-0' >
          <LoginForm alignLogo="text-center" />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginWithValidationContainer