import { Card, CardBody, Col } from "reactstrap";
import { Btn, H1, P } from "../../../../AbstractElements";
import { Href } from "../../../../utils/Constant";

const ProfileGreet = () => {
  return (
    <Col xl="4" sm="6">
      <Card className="profile-greeting card-hover">
        <CardBody>
          <div className="img-overlay">
            <H1>Good day, Lena Miller</H1>
            <P>
              Welcome to the Edmin family! We are delighted that you have
              visited our dashboard.
            </P>
            <Btn color="primary" href={Href}>
              Go Premium
            </Btn>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProfileGreet;
