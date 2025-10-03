import { Btn, H6, LI, Progressbar, UL } from "../../../../AbstractElements";
import { Storage } from "../../../../utils/Constant";
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";

const StoragePlan = () => {
  return (
    <UL>
      <LI className="p-0">
        <Btn outline color="primary w-auto">
          <SvgIcon iconId="database" className="feather" />
          {Storage}
        </Btn>
      </LI>
      <LI className="p-0">
        <div className="m-t-15">
          <Progressbar color="primary" style={{ height: "8px" }} value={25} className="mb-3"/>
          <H6 className="f-w-500">{"25 GB of 100 GB used"}</H6>
        </div>
      </LI>
    </UL>
  );
};

export default StoragePlan;
