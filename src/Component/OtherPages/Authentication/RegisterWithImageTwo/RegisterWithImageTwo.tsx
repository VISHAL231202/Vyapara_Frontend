import { Col, Container, Row } from 'reactstrap'
import RatioImage from '../../../../CommonElements/RatioImage'
import { dynamicImage } from '../../../../Service'
import CommonRegisterForm from '../Common/CommonRegisterForm'

const RegisterWithImageTwoContainer = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xl="7" className='login_bs_validation p-0'>
          <RatioImage className="bg-img-cover bg-center" src={dynamicImage("login/1.jpg")} alt="loginpage" />
        </Col>
        <Col xl="5" className="p-0">
          <CommonRegisterForm alignLogo="text-center" />
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterWithImageTwoContainer