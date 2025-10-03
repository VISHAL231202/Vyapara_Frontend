import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H2, P } from '../../../../AbstractElements';
import { EnterYourPassword, RememberPassword, SignIn, Unlock } from '../../../../utils/Constant';
import CommonLogo from '../Common/CommonLogo';
import { unlockFormSvgData } from '../../../../Data/OtherPage/OtherPage';

const UnlockUserContainer = () => {
    const [showPassWord, setShowPassWord] = useState(false);
    return (
      <div className="page-wrapper">
        <Container fluid className="p-0">
          <div className="authentication-main mt-0">
            <Row>
              <Col xs="12">
                <div className="login-card login-dark">
                  <div>
                    <CommonLogo />
                    <div className="login-main">
                      <Form className="theme-form" onSubmit={(event) => event.preventDefault()}>
                        <H2 className="mb-0">{Unlock}</H2>
                        <FormGroup>
                         {unlockFormSvgData}
                        </FormGroup>
                        <FormGroup>
                          <Label className="col-form-label">{EnterYourPassword}</Label>
                          <div className="form-input position-relative">
                            <Input type={showPassWord ? "text" : "password"} placeholder="*********" />
                            <div className="show-hide">
                              <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""} />
                            </div>
                          </div>
                        </FormGroup>
                        <FormGroup className="mb-0 checkbox-checked">
                          <div className="form-check checkbox-solid-info">
                            <Input id="checkbox1" type="checkbox" />
                            <Label for="checkbox1">{RememberPassword}</Label>
                            <Btn color="primary" block className="w-100 mt-3">{Unlock}</Btn>
                          </div>
                        </FormGroup>
                        <P className="mt-4 mb-0">{"Already have an account?"}
                          <Link className="ms-2" to={`${process.env.PUBLIC_URL}/authentication/loginsimple`}>{SignIn}</Link>
                        </P>
                      </Form>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
}

export default UnlockUserContainer