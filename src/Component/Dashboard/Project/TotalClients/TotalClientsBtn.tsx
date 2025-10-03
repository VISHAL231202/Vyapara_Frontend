import { AllClients, Invite } from "../../../../utils/Constant";
import { Btn } from "../../../../AbstractElements";

const TotalClientsBtn = () => {
  return (
    <div className="client-btn d-flex justify-content-between">
      <Btn color="secondary">
        {AllClients}
      </Btn>
      <Btn color="primary" className="px-5 px-lg-3 px-md-2" >
        {Invite}
      </Btn>
    </div>
  );
};

export default TotalClientsBtn;
