import { Table } from "reactstrap";
import { Date, InvoiceNo, PaymentStatus, TotalAmount } from "../../../../../utils/Constant";
import { H4 } from "../../../../../AbstractElements";

const InvoiceTwoDetails = () => {
  return (
    <td className="p-0">
      <Table style={{ width: "100%" }} responsive>
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-between", borderTop: "1px dashed rgba(82, 82, 108, 0.3)", borderBottom: "1px dashed rgba(82, 82, 108, 0.3)", padding: "25px 0" }}>
            <td className="p-0" style={{ display: "flex", alignItems: "center", gap: 6}}>
              <span style={{ opacity: "0.8", fontSize: 16, fontWeight: 500 }} >
                {InvoiceNo}
              </span>
              <H4 style={{ margin: 0, fontWeight: 400, fontSize: 16 }}>
                #VL25000365
              </H4>
            </td>
            <td className="p-0" style={{ display: "flex", alignItems: "center", gap: 6}}>
              <span style={{ opacity: "0.8", fontSize: 16, fontWeight: 500 }} >
                {Date} :
              </span>
              <H4 style={{ margin: 0, fontWeight: 400, fontSize: 16 }}>
                09/03/2024
              </H4>
            </td>
            <td className="p-0" style={{ display: "flex", alignItems: "center", gap: 6 }} >
              <span style={{ opacity: "0.8", fontSize: 16, fontWeight: 500 }}>
                {PaymentStatus} :
              </span>
              <H4 style={{ margin: 0, fontWeight: 400, fontSize: 16, padding: "6px 18px", backgroundColor: "rgba(84, 186, 74, 0.1)", color: "#54BA4A", borderRadius: 5 }} >
                Paid
              </H4>
            </td>
            <td className="p-0" style={{ display: "flex", alignItems: "center", gap: 6}}>
              <span style={{ opacity: "0.8", fontSize: 16, fontWeight: 500, minWidth: 136 }} >
                {TotalAmount} :
              </span>
              <H4 style={{ margin: 0, fontWeight: 400, fontSize: 16 }}>
                $26,410.00
              </H4>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceTwoDetails;
