import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Form, Input, Label, Row } from 'reactstrap';
import { Btn, H2, H6, LI, P, UL } from '../../../../AbstractElements';
import { CommonFormPropsType } from '../../../../Type/OtherPages/OtherPages';
import { AgreeWith, CreateAccount, CreateYourAccount, EmailAddress, EmailsPlaceHolder, FirstName, LastName, Password, PrivacyPolicy, SignIn, SignUpWith, YourName } from '../../../../utils/Constant';
import CommonLogo from './CommonLogo';

const CommonRegisterForm = ({alignLogo}:CommonFormPropsType) => {
    const [showPassWord, setShowPassWord] = useState(false);
    return (
      <div className="login-card login-dark">
        <div>
          <div>
            <CommonLogo alignLogo={alignLogo} />
          </div>
          <div className="login-main">
            <Form className="theme-form"  onSubmit={(event) => event.preventDefault()}>
              <H2 className="text-center">{CreateYourAccount}</H2>
              <P>{"Enter your personal details to create account"}</P>
              <div className="form-group">
                <Label className="col-form-label pt-0">{YourName}</Label>
                <Row className="g-2">
                  <Col xs="6">
                    <Input type="text" required placeholder={FirstName}/>
                  </Col>
                  <Col xs="6">
                    <Input type="text" required placeholder={LastName}/>
                  </Col>
                </Row>
              </div>
              <div className="form-group">
                <Label className="col-form-label">{EmailAddress}</Label>
                <Input type="email" required placeholder={EmailsPlaceHolder}/>
              </div>
              <div className="form-group">
                <Label className="col-form-label">{Password}</Label>
                <div className="form-input position-relative">
                <Input type={showPassWord ? "text" : "password"} placeholder="*********" required/>
                  <div className="show-hide">
                    <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""}/>
                  </div>
                </div>
              </div>
              <div className="form-group mb-0 checkbox-checked">
                <div className="checkbox-solid-info">
                  <Input id="checkbox1" type="checkbox" />
                  <Label for="checkbox1">{AgreeWith}<Link className="ms-3" to={`${process.env.PUBLIC_URL}/authentication/forgetpassword`}>{PrivacyPolicy}</Link></Label>
                </div>
                <Btn block color="primary" className="w-100 mt-3">{CreateAccount}</Btn>
              </div>
              <div className="login-social-title">
                <H6>{SignUpWith}</H6>
              </div>
              <div className="form-group">
                <UL className="login-social simple-list flex-row">
                  <LI>
                    <Link to="https://www.linkedin.com/login" target="_blank">
                      <i className="icon-linkedin" />
                    </Link>
                  </LI>
                  <LI>
                    <Link to="https://twitter.com/login?lang=en" target="_blank">
                      <i className="icon-twitter" />
                    </Link>
                  </LI>
                  <LI>
                    <Link to="https://www.facebook.com/" target="_blank">
                      <i className="icon-facebook" />
                    </Link>
                  </LI>
                  <LI>
                    <Link to="https://www.instagram.com/" target="_blank">
                      <i className="icon-instagram" />
                    </Link>
                  </LI>
                </UL>
              </div>
              <P className="mt-4 mb-0 text-center">{"Already have an account?"}<Link className="ms-2" to={`${process.env.PUBLIC_URL}/authentication/loginsimple`}>{SignIn}</Link></P>
            </Form>
          </div>
        </div>
      </div>
    )
}

export default CommonRegisterForm