import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../../AbstractElements";
import { Href } from "../../../../utils/Constant";
import { bestSellersTableBodyData } from "../../../../Data/Dashboard/Ecommerce/Ecommerce";
import { dynamicImage } from "../../../../Service";

const BestSellersTableBody = () => {
  return (
    <>
      {bestSellersTableBodyData.map((item, i) => (
        <tr key={i}> 
          <td>
            <div className="d-flex align-items-center gap-2">
              <div className="flex-shrink-0">
                <Image className="b-r-10" src={dynamicImage(item.image)} alt="avatar"/>
              </div>
              <div className="flex-grow-1">
                <Link to={Href}>
                  <H6 className="f-w-500">{item.clientName}</H6>
                  <span className="f-w-400 f-13">{item.date}</span>
                </Link>
              </div>
            </div>
          </td>
          <td>{item.price}</td>
          <td>{item.product}</td>
          <td>{item.amount}</td>
          <td>
            <Btn color={`light-${item.color}`} className="edge-btn f-12 w-100">
              {item.status}
            </Btn>
          </td>
        </tr>
      ))}
    </>
  );
};

export default BestSellersTableBody;
