import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Col, Container, Form, Input, Label, Row } from "reactstrap";
import { Btn, H2, H6, Image, P } from "../../AbstractElements";
import { dynamicImage } from "../../Service";
import { CreateAccount, DoNotAccount, EmailAddress, ForgotPassword, Href, Password, RememberPassword, SignIn, SignInAccount, SignInWith } from "../../utils/Constant";
import SocialApp from "./SocialApp";

const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("test123@gmail.com");
    const [password, setPassword] = useState("Test@123");
    const navigate = useNavigate();
  
    const SimpleLoginHandle = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (email === "test123@gmail.com" && password === "Test@123") {
        localStorage.setItem("login", JSON.stringify(true));
        navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
      } else {
        toast.error("Please Enter valid email or password...!");
      }
    };
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <div className="login-card login-dark">
            <div>
              <div>
                <Link className="logo text-center" to={Href}>
                  <Image className="img-fluid for-light" src={dynamicImage("logo/logo.png")} alt="logo" />
                  <Image className="img-fluid for-dark" src={dynamicImage("logo/dark-logo.png")} alt="darkLogo" />
                </Link>
              </div>
              <div className="login-main">
                <Form className="theme-form" onSubmit={(e) => SimpleLoginHandle(e)} >
                  <H2 className="text-center">{SignInAccount}</H2>
                  <P className="text-center">{"Enter your email & password to login"}</P>
                  <div className="form-group">
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input type="email" required placeholder="Test@gmail.com" value={email} name="email" onChange={(event) => setEmail(event.target.value)}  />
                  </div>
                  <div className="form-group">
                    <Label className="col-form-label">{Password}</Label>
                    <div className="form-input position-relative">
                      <Input type={show ? "text" : "password"} placeholder="*********"  onChange={(event) => setPassword(event.target.value)} value={password} name="password"/>
                      <div className="show-hide" onClick={() => setShow(!show)}>
                        <span className="show"> </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-0 checkbox-checked">
                    <div className="form-check checkbox-solid-info">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" htmlFor="checkbox1">
                        {RememberPassword}
                      </Label>
                      <Link to={`${process.env.PUBLIC_URL}/authentication/forget_password`}  >        {ForgotPassword}</Link>
                    </div>
                    <div className="text-end mt-3">
                      <Btn color="primary" block  className="w-100" >
                        {SignIn}
                      </Btn>
                    </div>
                  </div>
                  <div className="login-social-title">
                    <H6>{SignInWith}</H6>
                  </div>
                  <SocialApp />
                  <P className="mt-4 mb-0 text-center">
                    {DoNotAccount}
                    <Link className="ms-2" to={`${process.env.PUBLIC_URL}/authentication/register_simple`} >
                      {CreateAccount}
                    </Link>
                  </P>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
