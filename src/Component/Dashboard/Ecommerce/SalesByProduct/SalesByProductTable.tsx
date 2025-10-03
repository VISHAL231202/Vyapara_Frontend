import { Table } from "reactstrap";
import { Progressbar } from "../../../../AbstractElements";
import { salesByProductTableBody } from "../../../../Data/Dashboard/Ecommerce/Ecommerce";
import SalesByProductTableFooter from "./SalesByProductTableFooter";

const SalesByProductTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Amount</th>
          <th>%Sold</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {salesByProductTableBody.map((data, i) => (
          <tr key={i}>
            <td>{data.product}</td>
            <td>{data.amount}</td>
            <td>{data.percentage}</td>
            <td>
              <div className="progress-showcase">
                <Progressbar value={data.value} className={`sm-progress-bar progress-border-${data.color}`} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <SalesByProductTableFooter />
    </Table>
  );
};

export default SalesByProductTable;
