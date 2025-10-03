import { Btn } from "../../../../AbstractElements";
import { BottomLeft } from "../../../../utils/Constant";
import SweetAlert from "sweetalert2";

const BottomLeftBtn = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      position: "bottom-start",
      icon: "info",
      title: "You can use, Alerts and other HTML tags",
      showConfirmButton: false,
      timer: 1500
    });
  };
  return (
    <Btn color="secondary" className="sweet-18" onClick={displayAlert}>
      {BottomLeft}
    </Btn>
  );
};

export default BottomLeftBtn;
