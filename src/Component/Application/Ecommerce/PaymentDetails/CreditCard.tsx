import { Card, CardBody, Col, Form, Row } from 'reactstrap'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { CardNumber, CreditCards, FirstName, NameOnCard } from '../../../../utils/Constant'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import FormGroupCommon from './Common/FormGroupCommon'
import SelectCommon from './Common/SelectCommon'
import { creditSelect } from '../../../../Data/Application/Ecommerce/PaymentDetails'

const CreditCard = () => {
  return (
    <Col xl="8" className="box-col-80">
      <Card>
        <CommonCardHeader title={CreditCards} headClass="pb-0"/>
        <CardBody>
          <Row>
            <Col md="7">
              <Form className="theme-form mega-form">
                <FormGroupCommon type="text" placeholder={CardNumber} />
                <FormGroupCommon type="text" placeholder={FirstName} />
                <FormGroupCommon type="date" />
                <FormGroupCommon type="text" placeholder={NameOnCard} />
                <SelectCommon data={creditSelect} size={1} />
              </Form>
            </Col>
            <Col md="5" className="text-center card-order">
              <Image className="img-fluid" src={dynamicImage(`ecommerce/card.png`)} alt="ecommerce" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CreditCard