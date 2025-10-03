import React from 'react';
import { Col, FormGroup, Input, InputGroup, InputGroupText, Row } from 'reactstrap';
import { CardDetailProp } from '../../../../../Type/Forms/FormsLayout/FormWizardOne';
import { Href, Submit } from '../../../../../utils/Constant';

const CardDetails:React.FC<CardDetailProp> = ({ cartInfoForm, getUserData }) => {
  const { recipientUserName, userName } = cartInfoForm;

  return (
    <Col xxl="6" >
      <FormGroup>
        <Row>
          <Col xs="12">
            <InputGroup className="mb-3">
              <Input type="text" placeholder="Recipient's username" name="recipientUserName" value={recipientUserName} onChange={getUserData} />
              <a className='btn btn-outline-secondary d-flex align-items-center' href={Href}>{Submit}</a>
            </InputGroup>
          </Col>
          <Col xs="12">
            <InputGroup>
              <InputGroupText>@</InputGroupText>
              <Input type="text" placeholder="Username" name="userName" value={userName} onChange={getUserData} />
            </InputGroup>
          </Col>
        </Row>
      </FormGroup>
    </Col>
  );
};

export default CardDetails