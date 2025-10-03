import { Card, CardBody, Col} from "reactstrap";
import { ActiveList } from "../../../../utils/Constant";
import { activeData, activeListData } from "../../../../Data/Ui-Kits/Lists/Lists";
import { LI, SVG, UL } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon";

const ActiveLists = () => {
  return (
    <Col lg="4">
      <Card>
        <CardHeaderCommon title={ActiveList} span={activeData} headClass="pb-0" />
        <CardBody>
          <UL>
            <LI className="active bg-warning-light">
              <SVG className="svg-w-18 stroke-light me-1 stroke-white" iconId="right-3" /> UI Kits
            </LI>
            {activeListData.map((item, index) => (
              <LI key={index}>
                <SVG className="svg-w-18 stroke-light me-1" iconId="right-3" />
                {item}
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveLists;
