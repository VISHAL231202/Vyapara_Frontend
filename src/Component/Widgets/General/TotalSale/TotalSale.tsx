import { Card, CardHeader, Col, Row } from "reactstrap";
import { Badges, H3, H5, SVG } from "../../../../AbstractElements";
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";
import { totalSaleData } from "../../../../Data/Widgets/General/General";
import TotalSaleBody from "./TotalSaleBody";

const TotalSale = () => {
  return (
    <Col xs="12">
      <Row>
        {totalSaleData.map((item, i) => (
          <Col md="4" key={i}>
            <Card className="progress-items">
              <CardHeader className="pb-0">
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="d-flex gap-2">
                      <H5 className="f-18 font-light">{item.title}</H5>
                      <Badges color={`light-${item.colorBadges}`} className="align-items-center d-flex">
                        <SvgIcon iconId={item.icon} className={`feather me-1 pt-0 stroke-${item.colorBadges}`} />
                        <span className="f-w-500">{item.percentage}</span>
                      </Badges>
                    </div>
                    <H3 className="f-26 f-w-600 mt-3">$ {item.amount}</H3>
                  </div>
                  <div className={`flex-shrink-0 bg-light-${item.color}`}>
                    <SVG iconId={item.svgIcon} className={`fill-${item.color}`} />
                  </div>
                </div>
              </CardHeader>
              <TotalSaleBody item={item}/>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default TotalSale;
