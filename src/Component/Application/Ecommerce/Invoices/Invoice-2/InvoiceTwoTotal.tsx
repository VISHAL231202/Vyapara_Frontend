import { Table } from "reactstrap";
import { ShippingRate, Subtotal, TotalAmount, Vat } from "../../../../../utils/Constant";

const InvoiceTwoTotal = () => {
  return (
    <td className="p-0">
      <Table borderless responsive>
        <tfoot>
          <tr>
            <td style={{ padding: "5px 24px 5px 0", paddingTop: 15, textAlign : "end" }}>
              <span style={{ fontSize: 16, fontWeight: 400 }}>{Subtotal} :</span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "left", paddingTop: 15 }}>
              <span style={{fontSize: 16}}>$26,400.00</span>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "5px 24px 5px 0",textAlign : "end" }}>
              <span style={{ fontSize: 16, fontWeight: 400 }}>{Vat} (0%) :</span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "left", paddingTop: 0}} >
              <span style={{fontSize: 16}}>$0.00</span>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "5px 24px 5px 0", textAlign : "end" }}>
              <span style={{ fontSize: 16, fontWeight: 400 }}> {ShippingRate} : </span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "left", paddingTop: 0 }} >
              <span style={{fontSize: 16}}>$10.00</span>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "12px 24px 22px 0", }}>
              <span style={{ fontWeight: 600, fontSize: 20, color: "#43B9B2" }}>
                {TotalAmount} :
              </span>
            </td>
            <td style={{ padding: "12px 24px 22px 0", textAlign: "right" }} >
              <span style={{ fontWeight: 500, fontSize: 20, color: "rgba(67, 185, 178, 1)" }} >
                $26,410.00
              </span>
            </td>
          </tr>
        </tfoot>
      </Table>
    </td>
  );
};

export default InvoiceTwoTotal;
