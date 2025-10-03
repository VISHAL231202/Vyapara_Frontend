import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { SaleProgressHeading } from "../../../../utils/Constant";
import { Badges,H5,Image,LI,Progressbar,SVG,UL} from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { saleProgressData } from "../../../../Data/Dashboard/Ecommerce/Ecommerce";

const SaleProgress = () => {
  return (
    <Col md="6" xl="3">
      <Card className="sale-progress">
        <CardHeaderCommon headClass="pb-0" title={SaleProgressHeading} />
        <CardBody>
          <UL>
            {saleProgressData.map((item, i) => (
              <LI className={`d-flex gap-3 bg-light-${item.color}`} key={i}>
                <div className={`flex-shrink-0 border-${item.color}`}>
                  <Image src={dynamicImage(`dashboard2/product/${item.image}`)} alt="product" />
                </div>
                <div className="flex-grow-1">
                  <H5>{item.title}</H5>
                  <span>{item.offers}</span>
                  <Progressbar color={item.color} value={item.value} animated className={`progress-striped-${item.color}`} />
                </div>
                <Badges color={`light-${item.color}`} className="f-14 b-r-0">
                  <SVG iconId={item.icon} className={`svg-w-20 stroke-${item.color}`} />
                  <span className="f-w-500">{item.percentage}</span>
                </Badges>
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SaleProgress;
