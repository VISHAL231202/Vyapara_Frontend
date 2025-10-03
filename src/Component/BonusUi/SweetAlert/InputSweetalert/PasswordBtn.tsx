import Swal from "sweetalert2";
import { Btn } from "../../../../AbstractElements";
import { Password } from "../../../../utils/Constant";

const PasswordBtn = () => {
  const displayAlert = () => {
    const { value: password }:any =  Swal.fire({
      title: "Enter your password",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: "10",
        autocapitalize: "off",
        autocorrect: "off"
      }
    });
    if (password) {
      Swal.fire(`Entered password: ${password}`);
    }
  }
  return (
    <Btn color="danger" className="sweet-24" onClick={displayAlert}>
      {Password}
    </Btn>
  );
};

export default PasswordBtn;
