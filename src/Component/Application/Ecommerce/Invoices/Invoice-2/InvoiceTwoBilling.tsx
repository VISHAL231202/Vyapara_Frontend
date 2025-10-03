import { Table } from "reactstrap";
import { BillingAddress, Phone, ShippingAddress } from "../../../../../utils/Constant";
import { H4 } from "../../../../../AbstractElements";

const InvoiceTwoBilling = () => {
  return (
    <td className="p-0">
      <Table responsive style={{ width: "100%" }}>
        <tbody>
          <tr style={{ padding: "28px 0", display: "block" }}>
            <td className="p-0" style={{ width: "70%",minWidth: "304px"}}>
              <span style={{ opacity: "0.8", fontSize: 16, fontWeight: 500 }}>
                {BillingAddress}
              </span>
              <H4 style={{ fontWeight: 400, margin: "12px 0 6px 0", fontSize: 16 }} >
                Brooklyn Simmons
              </H4>
              <span style={{ width: "54%", display: "block", lineHeight: "1.5", opacity: "0.8", fontSize: 16, fontWeight: 400 }} >
                2118 Thornridge Cir. Syracuse, Connecticut 35624, United State
              </span>
              <span style={{ lineHeight: "2.6", opacity: "0.8", fontSize: 16, fontWeight: 400 }} >
                {Phone} : (239) 555-0108
              </span>
            </td>
            <td className="p-0">
              <span style={{ opacity: "0.8", fontSize: 16, fontWeight: 500 }} >
                {ShippingAddress}
              </span>
              <H4 style={{ fontWeight: 400, margin: "12px 0 6px 0", fontSize: 16}} >
                Cameron Williamson
              </H4>
              <span style={{ width: "95%", display: "block", lineHeight: "1.5", opacity: "0.8", fontSize: 16, fontWeight: 400 }}>
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </span>
              <span style={{ lineHeight: "2.6", opacity: "0.8", fontSize: 16, fontWeight: 400 }}>
                {Phone} : (219) 555-0114
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceTwoBilling;
