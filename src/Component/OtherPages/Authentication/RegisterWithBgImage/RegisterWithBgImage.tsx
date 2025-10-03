import { Col, Container, Row } from 'reactstrap'
import RatioImage from '../../../../CommonElements/RatioImage'
import { dynamicImage } from '../../../../Service'
import CommonRegisterForm from '../Common/CommonRegisterForm'

const RegisterWithBgImageContainer = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xl="5">
          <RatioImage className="bg-img-cover bg-center" src={dynamicImage("login/3.jpg")} alt="loginpage" />
        </Col>
        <Col xl="7" className="p-0">
          <CommonRegisterForm alignLogo="text-center"/>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterWithBgImageContainer