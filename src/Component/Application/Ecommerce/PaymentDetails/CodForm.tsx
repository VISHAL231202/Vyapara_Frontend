import { Card, CardBody, Col, Form, Row } from 'reactstrap'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { Address, City, Cod, EnterMobileNumber, FirstName, LastName, Pincode, State, Submit } from '../../../../utils/Constant'
import FormGroupCommon from './Common/FormGroupCommon'
import { Btn } from '../../../../AbstractElements'

const CodForm = () => {
  return (
    <Col xl="4" lg="6" className="box-col-33">
      <Card>
        <CommonCardHeader title={Cod} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormGroupCommon type="text" placeholder={FirstName} formClass="col-sm-6 p-r-0" />
              <FormGroupCommon type="text" placeholder={LastName} formClass="col-sm-6" />
              <FormGroupCommon type="text" placeholder={Pincode} formClass="col-sm-6 p-r-0" />
              <FormGroupCommon type="number" placeholder={EnterMobileNumber} formClass="col-sm-6" />
              <FormGroupCommon type="text" placeholder={State} formClass="col-sm-6 p-r-0" />
              <FormGroupCommon type="text" placeholder={City} formClass="col-sm-6" />
              <FormGroupCommon type="textarea" placeholder={Address} formClass="col-12" rows={3} />
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

export default CodForm