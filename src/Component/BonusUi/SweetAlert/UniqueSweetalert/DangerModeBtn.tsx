import { Btn } from "../../../../AbstractElements";
import SweetAlert from "sweetalert2";
import { DangerMode } from "../../../../utils/Constant";

const DangerModeBtn = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  };
  return (
    <Btn color="danger" className="sweet-7" onClick={displayAlert}>
      {DangerMode}
    </Btn>
  );
};

export default DangerModeBtn;
