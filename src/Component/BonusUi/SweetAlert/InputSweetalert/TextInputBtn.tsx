import { Btn } from "../../../../AbstractElements";
import Swal from "sweetalert2";
import { TextInput } from "../../../../utils/Constant";
const TextInputBtn = () => {
  const displayAlert = () => {
    const { value: ipAddress }:any = Swal.fire({
    title: "Enter your IP address",
    input: "text",
    inputLabel: "Your IP address",
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    }
    });
    if (ipAddress) {
      Swal.fire(`Your IP address is ${ipAddress}`);
    }
  }
  return (
    <Btn color="success" className="sweet-22" onClick={displayAlert} >
      {TextInput}
    </Btn>
  );
};

export default TextInputBtn;
