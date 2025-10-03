import { Col, Row, TabContent, TabPane } from "reactstrap";
import { ButtonsStyleType } from "../../../Type/Buttons/Buttons";
import { buttonsSizeTabContentData } from "../../../Data/Buttons/Buttons";
import { Btn, ToolTip } from "../../../AbstractElements";

const ButtonsSizeTabContent = ({ tabId }: ButtonsStyleType) => {
  return (
    <Col lg="6" sm="12">
      <TabContent activeTab={tabId}>
        {buttonsSizeTabContentData.map((item, i) => (
          <TabPane tabId={item.id} key={i}>
            <Row className="btn-showcase">
                {item.data.map((items, i) => (
                    <Col xs="12" sm="6" md="12" className="text-center" key={i}>
                        <Btn className={`m-1 ${items.title === "Light" ? "font-dark" : ""}`} color={items.color} size={item.class} >
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

export default ButtonsSizeTabContent;
