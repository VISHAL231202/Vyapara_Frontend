import { Card, CardBody, Col, Row } from "reactstrap";
import { H5, P } from "../../../../AbstractElements";
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";
import { articleDataThird } from "../../../../Data/Miscellaneous/Faq/Faq";

const ArticleVideo3 = () => {
  return (
    <Col xl="4">
      <Row>
        {articleDataThird.map((item, i) => (
          <Col xl="12" md="6" key={i}>
            <Card>
              <CardBody>
                <div className="d-flex">
                  <SvgIcon iconId="youtube" className="feather m-r-30 flex-shrink-0" />
                  <div className="flex-grow-1">
                    <H5 className="f-w-500">{item.title}</H5>
                    <P>{item.description}</P>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default ArticleVideo3;
