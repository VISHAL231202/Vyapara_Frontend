import { Table } from "reactstrap";
import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import InvoiceRightSide from "./InvoiceRightSide";
import InvoiceAddress from "./InvoiceAddress";
import InvoiceDetail from "./InvoiceDetail";

const InvoiceFiveHeader = () => {
  return (
    <Table responsive style={{ width: "100%" }} borderless>
      <tbody>
        <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between", alignItems: "center" }} >
          <td className="p-0">
            <Image className="for-light" src={dynamicImage("logo/logo.png")} alt="logo" />
            <Image className="for-dark" src={dynamicImage("logo/dark-logo.png")} alt="logo"/>
          </td>
          <td className="p-0">
            <InvoiceRightSide />
          </td>
        </tr>
        <tr style={{ display: "flex", justifyContent: "space-between" }} >
          <InvoiceAddress />
          <InvoiceDetail />
        </tr>
      </tbody>
    </Table>
  );
};

export default InvoiceFiveHeader;
