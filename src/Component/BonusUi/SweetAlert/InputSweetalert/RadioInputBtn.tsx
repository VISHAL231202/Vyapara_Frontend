import Swal from "sweetalert2";
import { Btn } from "../../../../AbstractElements";
import { RadioInput } from "../../../../utils/Constant";

const RadioInputBtn = () => {
  const displayAlert = () => {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          "#ff0000": "Red",
          "#00ff00": "Green",
          "#0000ff": "Blue"
        });
      }, 1000);
    });
    const { value: color }:any = Swal.fire({
      title: "Select color",
      input: "radio",
      inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something!";
        }
      }
    });
    if (color) {
      Swal.fire({ html: `You selected: ${color}` });
    }
  }
  return (
    <Btn color="secondary" className="sweet-27" onClick={displayAlert}>
      {RadioInput}
    </Btn>
  );
};

export default RadioInputBtn;
