import { Btn } from "../../../../AbstractElements";
import { QuestionsState } from "../../../../utils/Constant";
import SweetAlert from "sweetalert2";

const QuestionsStateBtn = () => {
  const displayAlert = () => {
    SweetAlert.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        if (result.isConfirmed) {
            SweetAlert.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            SweetAlert.fire("Changes are not saved", "", "info");
        }
      });
  };
  return (
    <Btn color="warning" className="sweet-12" onClick={displayAlert}>
      {QuestionsState}
    </Btn>
  );
};

export default QuestionsStateBtn;
