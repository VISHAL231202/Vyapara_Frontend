import Swal from "sweetalert2";
import { Btn } from "../../../../AbstractElements";
import { Range } from "../../../../utils/Constant";

const RangeBtn = () => {
  const displayAlert = () => {
    Swal.fire({
      title: "How old are you?",
      icon: "question",
      input: "range",
      inputLabel: "Your age",
      inputAttributes: {
        min: "8",
        max: "120",
        step: "1"
      },
      inputValue: 25
    });
  }
  return (
    <Btn className="font-dark bg-light sweet-29" onClick={displayAlert}>
      {Range}
    </Btn >
  );
};

export default RangeBtn;
