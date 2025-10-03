import Swal from "sweetalert2";
import { Btn } from "../../../../AbstractElements";
import { Textarea } from "../../../../utils/Constant";

const TextareaBtn = () => {
  const displayAlert = () => {
    const { value: text }:any = Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
      showCancelButton: true
    });
    if (text) {
      Swal.fire(text);
    }
  }
  return (
    <Btn color="warning" className="sweet-25" onClick={displayAlert}>
      {Textarea}
    </Btn>
  );
};

export default TextareaBtn;
