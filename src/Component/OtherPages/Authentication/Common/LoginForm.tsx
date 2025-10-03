import { useState } from 'react'
import { CommonFormPropsType } from '../../../../Type/OtherPages/OtherPages';
import { Form, Input, Label } from 'reactstrap';
import { Btn, H2, H6, LI, P, UL } from '../../../../AbstractElements';
import { CreateAccount, EmailAddress, EmailsPlaceHolder, ForgotPassword, Password, RememberPassword, SignIn, SignInAccount, SignInWith } from '../../../../utils/Constant';
import { Link } from 'react-router-dom';
import CommonLogo from './CommonLogo';

const LoginForm =  ({ alignLogo }: CommonFormPropsType) => {
  const [showPassWord, setShowPassWord] = useState(false);
  return (
    <div className="login-card login-dark">
      <div>
        <div>
          <CommonLogo alignLogo={alignLogo} />
        </div>
        <div className="login-main">
          <Form className="theme-form" onSubmit={(event) => event.preventDefault()}>
            <H2 className="text-center">{SignInAccount}</H2>
            <P className="text-center">{"Enter your email & password to login"}</P>
            <div className='form-group'>
              <Label className="col-form-label">{EmailAddress}</Label>
              <Input type="email" required placeholder={EmailsPlaceHolder} />
            </div>
            <div className='form-group'>
              <Label className="col-form-label">{Password}</Label>
              <div className="form-input position-relative">
                <Input type={showPassWord ? "text" : "password"} placeholder="*********"/>
                <div className="show-hide">
                  <span onClick={() => setShowPassWord(!showPassWord)} className={!showPassWord ? "show" : ""}/>
                </div>
              </div>
            </div>
            <div className="mb-0 form-group checkbox-checked">
              <div className="checkbox-solid-info">
                <Input id="checkbox1" type="checkbox" />
                <Label className="text-muted ms-2" for="checkbox1">{RememberPassword}</Label>
                <Link className="link-two" to={`${process.env.PUBLIC_URL}/authentication/forgetpassword`}>{ForgotPassword}</Link>
              </div>
              <div className="text-end mt-3">
                <Btn color="primary" className='w-100 text-white' block>{SignIn}</Btn>
              </div>
            </div>
            <div className="login-social-title">
              <H6>{SignInWith}</H6>
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
            <P className="mt-4 mb-0 text-center">
              {"Don't have account?"}<Link className="ms-2" to={`${process.env.PUBLIC_URL}/authentication/registersimple`}>{CreateAccount}</Link>
            </P>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm