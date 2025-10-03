import { Card, CardBody, Col, Form, FormGroup, Row } from 'reactstrap'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { Emi, FirstName, LastName, Pincode, Submit } from '../../../../utils/Constant'
import FormGroupCommon from './Common/FormGroupCommon'
import SelectCommon from './Common/SelectCommon'
import { Btn, Image, LI, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { emiBankSelect, emiCardSelect, emiYearSelect } from '../../../../Data/Application/Ecommerce/PaymentDetails'

const EmiForm = () => {
  return (
    <Col xl="4" lg="6" className="box-col-33">
      <Card>
        <CommonCardHeader title={Emi} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormGroupCommon type="text" placeholder={FirstName} formClass="col-sm-6  p-r-0" />
              <FormGroupCommon type="text" placeholder={LastName} formClass="col-sm-6 " />
              <FormGroupCommon type="text" placeholder={Pincode} formClass="col-sm-6  p-r-0" />
              <SelectCommon size={1} data={emiBankSelect} selectClass="col-sm-6 " />
              <SelectCommon size={1} data={emiCardSelect} selectClass="col-12" />
              <SelectCommon size={1} data={emiYearSelect} selectClass="col-12" />
              <FormGroup>
                <Col xs="12">
                  <UL className="payment-opt simple-list flex-row">
                    <LI className="p-0"><Image src={dynamicImage(`ecommerce/mastercard.png`)} alt="mastercard" /></LI>
                    <LI className="p-0"><Image src={dynamicImage(`ecommerce/visa.png`)} alt="visa" /></LI>
                    <LI className="p-0"><Image src={dynamicImage(`ecommerce/paypal.png`)} alt="paypal" /></LI>
                  </UL>
                </Col>
              </FormGroup>
              <Col xs="12">
                <Btn color="primary" className='btn-block'>{Submit}</Btn>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default EmiForm