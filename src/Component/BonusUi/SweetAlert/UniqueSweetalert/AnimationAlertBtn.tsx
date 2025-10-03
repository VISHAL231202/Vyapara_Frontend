import { Btn } from "../../../../AbstractElements";
import { AnimationAlert } from "../../../../utils/Constant";
import SweetAlert from "sweetalert2";

const AnimationAlertBtn = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      title: "Custom animation with Animate.css",
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
      },
    });
  };
  return (
    <Btn color="warning" className="sweet-6" onClick={displayAlert}>
      {AnimationAlert}
    </Btn>
  );
};

export default AnimationAlertBtn;
