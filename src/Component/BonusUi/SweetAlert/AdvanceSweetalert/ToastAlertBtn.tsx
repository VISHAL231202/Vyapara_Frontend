import Swal from "sweetalert2";
import { Btn } from "../../../../AbstractElements";

const ToastAlertBtn = () => {
  const displayAlert = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      timer: 3000,
      timerProgressBar:true
    });
    Toast.fire('Signed in successfully', '', 'success')
  }
  return (
    <Btn color="secondary" className="sweet-13" onClick={displayAlert} >
      Toast Alert
    </Btn>
  );
};

export default ToastAlertBtn;
