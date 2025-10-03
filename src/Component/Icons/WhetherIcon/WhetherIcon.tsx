import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import { Icons, Weather, WhetherIconsWithAnimations } from "../../../utils/Constant"
import { weatherIconList } from "../../../Data/Icons/WhetherIcon"
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs"
import { H4 } from "../../../AbstractElements"


const WhetherIconContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Weather} parent={Icons} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0 d-flex justify-content-between align-items-center">
                <H4>{WhetherIconsWithAnimations}</H4>
              </CardHeader>
              <CardBody>
                <Row className="icon-lists icon-event whether-icon">
                  {weatherIconList.map((icon, i) => (
                    <Col xxl="2" lg="3" sm="4" key={i}>
                      <Card className="d-flex align-items-center flex-column default-border">
                        {icon.icon}
                      </Card>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default WhetherIconContainer