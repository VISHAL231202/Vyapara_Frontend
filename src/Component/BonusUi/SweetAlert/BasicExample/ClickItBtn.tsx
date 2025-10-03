import { Btn } from "../../../../AbstractElements";
import { ClickIt } from "../../../../utils/Constant";
import SweetAlert from "sweetalert2";

const ClickItBtn = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      title: "Welcome! to the Edmin Template",
      confirmButtonColor: "var(--theme-default)",
    });
  };

  return (
    <Btn color="primary" className="sweet-1" onClick={displayAlert}>
      {ClickIt}
    </Btn>
  );
};

export default ClickItBtn;
