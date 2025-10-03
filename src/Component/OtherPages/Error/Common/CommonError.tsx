import { Col, Container } from 'reactstrap'
import { Btn, H3, P } from '../../../../AbstractElements'
import { BackToHomePage, PageNotFound } from '../../../../utils/Constant'
import { CommonErrorPageType } from '../../../../Type/OtherPages/OtherPages'

const CommonError= ({errorSvg}:CommonErrorPageType) => {
  return (
    <div className="page-wrapper compact-wrapper">
      <div className="error-wrapper">
        <Container>
          <div className='svg-wrraper'>
            {errorSvg}
          </div>
          <Col md="8" className="offset-md-2">
            <H3>{PageNotFound}</H3>
            <P className="sub-content">{"The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved."}</P>
            <Btn color={"primary"} href={`${process.env.PUBLIC_URL}/dashboard/default`}>{BackToHomePage}</Btn>
          </Col>
        </Container>
      </div>
    </div>
  )
}

export default CommonError