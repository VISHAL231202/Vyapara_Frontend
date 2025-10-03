import { Btn } from "../../../../AbstractElements";
import { TopRight } from "../../../../utils/Constant";
import SweetAlert from "sweetalert2";

const TopRightBtn = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      position: "top-right",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  };
  return (
    <Btn color="primary" className="sweet-16" onClick={displayAlert}>
      {TopRight}
    </Btn>
  );
};

export default TopRightBtn;
