import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { Btn, H4 } from '../../../../AbstractElements'
import { AskQuestion, Href, Navigation } from '../../../../utils/Constant'
import NavigationOption from './NavigationOption'
import { FaCog, FaCommentAlt } from 'react-icons/fa'

const AskQuestions = () => {
  return (
    <Col lg="12">
      <Card className="card-mb-faq">
        <CardHeader className="faq-header pb-0">
          <H4>{Navigation}</H4>
          <FaCog />
        </CardHeader>
        <CardBody className="faq-body">
          <div className="navigation-btn">
            <Btn color="primary" tag="a" href={Href}>
              <FaCommentAlt className='m-r-10'/>
              {AskQuestion}
            </Btn>
          </div>
          <NavigationOption />
        </CardBody>
      </Card>
    </Col>
  )
}

export default AskQuestions