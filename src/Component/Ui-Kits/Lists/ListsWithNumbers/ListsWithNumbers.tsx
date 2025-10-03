import { Card, CardBody, Col} from "reactstrap";
import { ListsWithNumber } from "../../../../utils/Constant";
import { listNumberData, listNumberDataList } from "../../../../Data/Ui-Kits/Lists/Lists";
import { LI, OL } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon";

const ListsWithNumbers = () => {
  return (
    <Col md="4">
      <Card>
        <CardHeaderCommon title={ListsWithNumber} span={listNumberData} headClass="pb-0" />
        <CardBody>
          <OL className="list-group list-group-numbered">
            <LI className="font-primary f-w-500">
              Known for delivery of useful and usable solutions
            </LI>
            {listNumberDataList.map(({ color, text }, index) => (
              <LI className={`font-${color} f-w-500`} key={index}>
                {text}
              </LI>
            ))}
          </OL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListsWithNumbers;
