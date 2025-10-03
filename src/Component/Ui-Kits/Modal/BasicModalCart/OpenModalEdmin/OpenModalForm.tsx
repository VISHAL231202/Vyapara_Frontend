import { Field, Form, Formik } from 'formik';
import { useState } from 'react'
import { Col, FormGroup, Label, ModalBody, Row } from 'reactstrap'
import { EmailAddress, EnterYourFirstName, EnterYourLastName, FirstName, LastName, EdminEmail, SignUp, TermsAndCondition } from '../../../../../utils/Constant';
import { formSchema } from '../../../../../Data/Ui-Kits/Modal/Modal';
import { Btn } from '../../../../../AbstractElements';
import { FormSubmitProp } from '../../../../../Type/Ui-Kits/UiKitsTypes';

const OpenModalForm: React.FC<FormSubmitProp>  = ({ modal }) => {
  const [formSubmit, setFormSubmit] = useState(false);
  return (
    <ModalBody>
      <Formik initialValues={{ firstname: "", lastname: "", email: "" }} onSubmit={modal} validationSchema={formSchema}>
        {({ errors }) => (
          <Form >
            <Row className="g-3">
              <Col md="6">
                <FormGroup>
                  <Label>{FirstName}</Label>
                  <Field type="text" name="firstname" className={`form-control ${formSubmit && `${errors.firstname ? "is-invalid" : "is-valid"}`}`} placeholder={EnterYourFirstName} />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label>{LastName}</Label>
                  <Field type="text" name="lastname" className={`form-control ${formSubmit && `${errors.lastname ? "is-invalid" : "is-valid"}`}`} placeholder={EnterYourLastName} />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label>{EmailAddress}</Label>
                  <Field type="text" name="email" className={`form-control ${formSubmit && `${errors.lastname ? "is-valid" : "is-invalid"}`}`} placeholder={EdminEmail} />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup check>
                  <Field className="form-check-input" type="checkbox" name="agree" />
                  <Label check className="text-success">{TermsAndCondition}</Label>
                </FormGroup>
                <Btn color="primary" onClick={() => setFormSubmit(true)}>{SignUp}</Btn>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </ModalBody>
  )
}

export default OpenModalForm