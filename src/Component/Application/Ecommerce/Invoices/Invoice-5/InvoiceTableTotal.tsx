import { Discount, Subtotal, TotalDue, VATTax } from "../../../../../utils/Constant";

const InvoiceTableTotal = () => {
  return (
    <>
      <tr>
        <td className="p-0"></td>
        <td className="p-0"></td>
        <td className="p-0"></td>
        <td style={{ textAlign: "center", padding: "35px 0 18px" }}>
          <span style={{ opacity: "0.8", fontWeight: 600 }}>{Subtotal} </span>
        </td>
        <td style={{ textAlign: "center", background: "rgba(67, 185, 178 , 0.1)", display: "block", padding: "35px 0 18px" }}>
          <span style={{ color: "#43B9B2", fontWeight: 600, opacity: "0.9" }}>
            $6100.00
          </span>
        </td>
      </tr>
      <tr>
        <td className="p-0"> </td>
        <td className="p-0"> </td>
        <td className="p-0"> </td>
        <td className="p-0" style={{ width: "12%", textAlign: "center" }}>
          <span style={{ opacity: "0.8", fontWeight: 600 }}>
            {VATTax}
          </span>
        </td>
        <td className="ps-0 pe-0 pt-0" style={{ textAlign: "center", background: "rgba(67, 185, 178 , 0.1)", display: "block", paddingBottom: 18 }} >
          <span style={{ color: "#43B9B2", fontWeight: 600, opacity: "0.9"}}>
            $50.00
          </span>
        </td>
      </tr>
      <tr>
        <td />
        <td />
        <td> </td>
        <td className="p-0" style={{ width: "12%", textAlign: "center" }}>
          <span style={{ opacity: "0.8", fontWeight: 600 }}>{Discount} </span>
        </td>
        <td className="ps-0 pe-0 pt-0" style={{ textAlign: "center", background: "rgba(67, 185, 178 , 0.1)", display: "block", paddingBottom: 18 }}>
          <span style={{ color: "#43B9B2", fontWeight: 600, opacity: "0.9" }}>
            $30.00
          </span>
        </td>
      </tr>
      <tr>
        <td className="p-0"> </td>
        <td className="p-0"> </td>
        <td />
        <td className="p-0" style={{ width: "12%", textAlign: "center" }}>
          <span style={{ opacity: "0.8", fontWeight: 600 }}>
            {TotalDue}
          </span>
        </td>
        <td className="p-0" style={{ textAlign: "center", background: "rgba(67, 185, 178 , 0.1)" }} >
          <span style={{ color: "#ffffff", fontWeight: 600, opacity: "0.9", background: "#43B9B2", padding: "12px 37px", marginTop: 0, display: "block" }} >
            $6120.00
          </span>
        </td>
      </tr>
    </>
  );
};

export default InvoiceTableTotal;
