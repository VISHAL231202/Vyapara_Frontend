import { Input } from "reactstrap";
import { Btn, H6, Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { Link } from "react-router-dom";
import { Href } from "../../../../../utils/Constant";
import { topSellingProductsTableData } from "../../../../../Data/Dashboard/Ecommerce/Ecommerce";

const TopSellingProductsTableBody = () => {
  return (
    <>
      {topSellingProductsTableData.map((item, i) => (
        <tr key={i}>
          <td>
            <Input className="form-check-input" type="checkbox" />
          </td>
          <td>
            <div className="d-flex align-items-center gap-2">
              <div className="flex-shrink-0">
                <Image className="img-30 b-r-10" src={dynamicImage(`dashboard2/order/${item.image}`)} alt="watch" />
              </div>
              <div className="flex-grow-1">
                <Link to={Href}>
                  <H6 className="f-w-500">{item.productName}</H6>
                  <span className="font-light f-w-400 f-13">{item.date}</span>
                </Link>
              </div>
            </div>
          </td>
          <td>{item.id}</td>
          <td>
            <span className="font-light">{item.email}</span>
          </td>
          <td>{item.stock}</td>
          <td>{item.amount}</td>
          <td>
            <Btn color={`light-${item.color}`} className="edge-btn f-13 w-100">{item.payment}</Btn>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TopSellingProductsTableBody;
