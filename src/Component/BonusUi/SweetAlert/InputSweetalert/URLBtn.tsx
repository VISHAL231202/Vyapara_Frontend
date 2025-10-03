import { Btn } from "../../../../AbstractElements";
import { URL } from "../../../../utils/Constant";
import Swal from 'sweetalert2'

const URLBtn = () => {
  const displayAlert = () => {
    const { value: url }:any = Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL"
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  }
  return (
    <Btn color="info" className="sweet-23" onClick={displayAlert}>
      {URL}
    </Btn>
  );
};

export default URLBtn;
