import { Table } from "reactstrap";
import { H4, LI, UL } from "../../../../../AbstractElements";
import { Email, InvoiceHeading, InvoiceTo, Phone, Website } from "../../../../../utils/Constant";
import InvoiceRightLogo from "./InvoiceRightLogo";

const InvoiceFourHeader = () => {
  return (
    <td className="p-0">
      <Table responsive style={{ width: "100%" }} borderless>
        <tbody>
          <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between" }} >
            <td className="p-0">
              <H4 style={{ fontSize: 42, fontWeight: 600, color: "#43B9B2", margin: 0 }} >
                {InvoiceHeading}
              </H4>
              <UL style={{ listStyle: "none",  gap: 15, padding: 0, margin: "20px 0" }} className="simple-list flex-row">
                <LI className="p-0">
                  <span style={{ fontSize: 16, fontWeight: 600, opacity: "0.8" }} >
                    {InvoiceTo} :
                  </span>
                </LI>
                <LI className="p-0">
                  <span style={{ fontWeight: 600, fontSize: 16, color: "#43B9B2",display: "block",marginBottom: 8 }}>
                    Brooklyn Simmons
                  </span>
                  <span style={{ width: "75%", display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 400,opacity: "0.8" }} >
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                  </span>
                  <span style={{lineHeight: "1.9", fontSize: 16, fontWeight: 400, opacity: "0.8", display: "block" }} >
                    {Phone} : (219) 555-0114
                  </span>
                  <span style={{ lineHeight: "1.7", fontSize: 16, fontWeight: 400, opacity: "0.8", display: "block" }} >
                    {Email} : yourmail@themesforest.com
                  </span>
                  <span style={{ lineHeight: "1.7", fontSize: 16, fontWeight: 400, opacity: "0.8", display: "block" }} >
                    {Website}: www.websites.com
                  </span>
                </LI>
              </UL>
            </td>
            <InvoiceRightLogo />
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceFourHeader;
