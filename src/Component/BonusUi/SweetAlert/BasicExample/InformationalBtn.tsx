import SweetAlert from "sweetalert2";
import { Btn } from "../../../../AbstractElements";
import { Informational } from "../../../../utils/Constant";

const InformationalBtn = () => {
    const displayAlert = () => {
        SweetAlert.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
        });
    };
  return (
    <Btn color="info" className="sweet-4" onClick={displayAlert}>
      {Informational}
    </Btn>
  );
};

export default InformationalBtn;
