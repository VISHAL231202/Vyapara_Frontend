import { Col, Row, TabContent, TabPane } from "reactstrap";
import { ButtonsStyleType } from "../../../Type/Buttons/Buttons";
import { buttonsStyleTabContentData } from "../../../Data/Buttons/Buttons";
import { Btn, ToolTip } from "../../../AbstractElements";

const ButtonsStyleTabContent = ({ tabId }: ButtonsStyleType) => {
  return (
    <Col lg="6" sm="12">
      <TabContent activeTab={tabId}>
        {buttonsStyleTabContentData.map((item, i) => (
          <TabPane tabId={item.id} key={i}>
            <Row className="btn-showcase">
              {item.data.map((items, i) => (
                <Col xs="12" sm="6" md="12" key={i} className="text-center">
                  <Btn outline={item.outlines}
                    color={items.color}
                    className={`m-1 ${
                      items.title === "Light" ? "font-dark" : ""
                    } ${item.class} ${item.gradien && `btn-${items.color}-gradien`}`}
                    id={`btn-${i}`}
                  >
                    {items.title} {"Button"}
                  </Btn>
                  <ToolTip target={`btn-${i}`} placement="top">
                    {items.tooltip}
                  </ToolTip>
                </Col>
              ))}
            </Row>
          </TabPane>
        ))}
      </TabContent>
    </Col>
  );
};

export default ButtonsStyleTabContent;
