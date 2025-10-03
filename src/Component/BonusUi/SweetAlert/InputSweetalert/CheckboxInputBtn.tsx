import Swal from "sweetalert2";
import { Btn } from "../../../../AbstractElements";
import { CheckboxInput } from "../../../../utils/Constant";

const CheckboxInputBtn = () => {
  const displayAlert = () => {
    const { value: accept }:any = Swal.fire({
      title: "Terms and conditions",
      input: "checkbox",
      inputValue: 1,
      inputPlaceholder: `
        I agree with the terms and conditions
      `,
      confirmButtonText: `
        Continue&nbsp;<i class="fa fa-arrow-right"></i>
      `,
      inputValidator: (result) => {
        return !result && "You need to agree with T&C";
      }
    });
    if (accept) {
      Swal.fire("You agreed with T&C :)");
    }
  }
  return (
    <Btn color="dark" className="sweet-28" onClick={displayAlert}>
      {CheckboxInput}
    </Btn>
  );
};

export default CheckboxInputBtn;
