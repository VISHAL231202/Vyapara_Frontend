import { LI, SVG, UL } from "../../../../../AbstractElements";
import { Website } from "../../../../../utils/Constant";

const InvoiceRightSide = () => {
  return (
    <UL style={{ listStyle: "none", display: "flex", background: "linear-gradient(291deg, #43B9B2 21.2%, #43B9B2 83.92%)", padding: "31px 80px", borderBottomLeftRadius: "100px", gap:"28px" }} className="flex-row" >
      <LI className="p-0" style={{ display: "flex", alignItems: "center",}}>
        <SVG className="stroke-icon" iconId="call" style={{ height: 14, width: 14, fill: "#fff", marginRight: 10 }} />
        <span style={{ color: "#FFFFFF" }}>(239) 555-0108</span>
      </LI>
      <LI style={{ borderLeft: "1px dashed rgba(255, 255, 255, 0.3)", borderRight: "1px dashed rgba(255, 255, 255, 0.3)", padding: "0 22px", display: "flex", alignItems: "center", }} >
        <SVG className="stroke-icon" style={{ height: 16, width: 16, fill: "#fff", marginRight: 10 }} iconId="email-box" />
        <span style={{ color: "#FFFFFF"}}>Edmin@themesforest.com</span>
      </LI>
      <LI className="p-0" style={{ display: "flex", alignItems: "center",}}>
        <SVG className="stroke-icon" style={{ height: 16, width: 16, fill: "#fff", marginRight: 10 }} iconId="web" />
        <span style={{ color: "#FFFFFF"}}>{Website}: www.Edminthemes.com</span>
      </LI>
    </UL>
  );
};

export default InvoiceRightSide;
