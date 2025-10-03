import { Card, CardBody, Col, Form, Label, Row } from 'reactstrap'
import { Btn } from '../../../../AbstractElements'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { debitMonthSelect, debitYearSelect } from '../../../../Data/Application/Ecommerce/PaymentDetails'
import { CVC, CVVNumber, CardNumber, DebitCards, ExpirationDate, FullNameHere, Submit } from '../../../../utils/Constant'
import FormGroupCommon from './Common/FormGroupCommon'
import SelectCommon from './Common/SelectCommon'
const DebitCard = () => {
  return (
    <Col xl="4" lg="6" className="box-col-33 debit-card">
      <Card>
        <CommonCardHeader title={DebitCards} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form e-commerce-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormGroupCommon type="text" placeholder={FullNameHere} formClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder={CardNumber} formClass="col-6" />
              <FormGroupCommon type="text" placeholder={CVVNumber} formClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder={CVC} formClass="col-6" />
              <Col xs="12">
                <Label className="col-form-label p-b-20" check>{ExpirationDate}</Label>
              </Col>
              <SelectCommon size={1} data={debitMonthSelect} selectClass="col-6 p-r-0" />
              <SelectCommon size={1} data={debitYearSelect} selectClass="col-6" />
            </Row>
            <Col xs="12">
              <Btn color="primary" className='btn-block'>{Submit}</Btn>
            </Col>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DebitCard