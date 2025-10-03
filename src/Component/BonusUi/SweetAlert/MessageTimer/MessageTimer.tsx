import { Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
import CardHeaderCommon from "../../../Ui-Kits/CardHeaderCommon";
import { MessageTimerHeading } from "../../../../utils/Constant";
import { Btn } from "../../../../AbstractElements";

const MessageTimer = () => {
  const displayAlert = () => {
    let timerInterval: string | number | NodeJS.Timer | undefined;
    Swal.fire({
    title: "Auto close alert!",
    html: "I will close in <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
      }, 100);
    },
    willClose: () => {
        clearInterval(timerInterval);
    }
    }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
    }
    });
  };
  return (
    <Col xl="3">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={MessageTimerHeading} />
        <CardBody>
          <div className="common-flex">
            <Btn color="tertiary" className="sweet-20" onClick={displayAlert} >
              {MessageTimerHeading}
            </Btn>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MessageTimer;
