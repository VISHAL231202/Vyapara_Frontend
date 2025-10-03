import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../Ui-Kits/CardHeaderCommon";
import { ModalWithImagesHeading } from "../../../../utils/Constant";
import { Btn } from "../../../../AbstractElements";
import Swal from "sweetalert2";

const ModalWithImages = () => {
  const displayAlert = () => {
    Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
    });
  }
  return (
    <Col xl='3'>
      <Card>
        <CardHeaderCommon headClass="pb-0" title={ModalWithImagesHeading} />
        <CardBody>
          <div className="common-flex">
            <Btn color="info" className="sweet-21" onClick={displayAlert} >
              {ModalWithImagesHeading}
            </Btn>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ModalWithImages;
