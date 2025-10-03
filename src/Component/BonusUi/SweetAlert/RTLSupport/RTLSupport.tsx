import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../Ui-Kits/CardHeaderCommon";
import { RTLAlert, RTLSupportHeading } from "../../../../utils/Constant";
import { Btn } from "../../../../AbstractElements";
import Swal from "sweetalert2";

const RTLSupport = () => {
  const displayAlert = () => {
    Swal.fire({
      title: "هل تريد الاستمرار؟",
      icon: "question",
      iconHtml: "؟",
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      showCancelButton: true,
      showCloseButton: true
    });
  }
  return (
    <Col xl="3">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={RTLSupportHeading} />
        <CardBody>
          <div className="common-flex">
            <Btn color="secondary" className="sweet-15" onClick={displayAlert}>
              {RTLAlert}
            </Btn>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RTLSupport;
