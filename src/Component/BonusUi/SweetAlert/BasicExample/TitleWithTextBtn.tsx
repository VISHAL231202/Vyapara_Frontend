import { Btn } from "../../../../AbstractElements";
import { TitleWithText } from "../../../../utils/Constant";
import SweetAlert from "sweetalert2";

const TitleWithTextBtn = () => {
    const displayAlert = () => {
        SweetAlert.fire({
            title: "It's Magic!",
            text: "Thank you for visiting Edmin Template",
            confirmButtonColor: "var(--theme-default)",
        });
    };
  return (
    <Btn color="secondary" className="sweet-2" onClick={displayAlert}>
      {TitleWithText}
    </Btn>
  );
};

export default TitleWithTextBtn;
