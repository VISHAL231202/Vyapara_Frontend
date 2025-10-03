import { Table } from "reactstrap";
import { H2, H6 } from "../../../../../AbstractElements";
import { AmountDus, BilledTo, InvoiceDate, InvoiceNumber } from "../../../../../utils/Constant";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { getallCardTotal } from "../../../../../Service/Ecommerce.service";

const InvoiceContent = () => {
  const {cart,tax} = useAppSelector((state)=>state.cartData)
  return (
    <td className="p-0">
      <Table borderless className="bill-content w-100">
        <tbody>
          <tr>
            <td className="p-0" style={{ width: "36%" }}>
              <span style={{ opacity: "0.8" }}>{BilledTo}</span>
              <H6 style={{ width: "46%" }}>
                Edmin Matchett Vandelay Group LTD
              </H6>
            </td>
            <td className="p-0" style={{ width: "21%" }}>
              <span style={{ opacity: "0.8" }}>{InvoiceDate}</span>
              <H6>09/03/2024</H6>
            </td>
            <td className="p-0">
              <span style={{ opacity: "0.8" }}>{InvoiceNumber}</span>
              <H6>#VL25000365</H6>
            </td>
            <td className="p-0" style={{ textAlign: "right" }}>
              <span style={{ opacity: "0.8" }}>{AmountDus}</span>
              <H2>$ {getallCardTotal(cart)+ getallCardTotal(cart)*tax/100}</H2>
            </td>
          </tr>
          <tr>
            <td className="p-0" style={{ width: "36%" }}>
              <H6 style={{ width: "63%", paddingTop: 20 }}>
                {"2118 Thornridge Cir. Syracuse, Connecticut 35624, United State"}
              </H6>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceContent;
