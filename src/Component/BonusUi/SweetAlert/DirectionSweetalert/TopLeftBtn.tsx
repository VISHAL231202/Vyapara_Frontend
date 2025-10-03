import { Btn } from "../../../../AbstractElements";
import { TopLeft } from "../../../../utils/Constant";
import SweetAlert from "sweetalert2";

const TopLeftBtn = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      position: "top-start",
      icon: "error",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  };
  return (
    <Btn color="info" className="sweet-17" onClick={displayAlert}>
      {TopLeft}
    </Btn>
  );
};

export default TopLeftBtn;
