import { Btn } from "../../../../AbstractElements";
import { LoginEmail } from "../../../../utils/Constant";
import Swal from 'sweetalert2'

const LoginEmailBtn = () => {
  const displayAlert = () => {
    const { value: email }:any = Swal.fire({
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address"
    });
    if (email) {
      Swal.fire(`Entered email: ${email}`);
    }
  }
  return (
    <Btn color="tertiary" className="sweet-8" onClick={displayAlert}>
      {LoginEmail}
    </Btn>
  );
};

export default LoginEmailBtn;
