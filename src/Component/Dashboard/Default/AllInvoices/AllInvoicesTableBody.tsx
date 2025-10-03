import { Input } from "reactstrap";
import { Btn, H6, Image } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";
import { dynamicImage } from "../../../../Service";
import { AllInvoicesTableBodyData } from "../../../../Data/Dashboard/Default/Default";

const AllInvoicesTableBody = () => {
  return (
    <>
      {AllInvoicesTableBodyData.map((item, i) => (
        <tr key={i}>
          <td>
            <Input className="form-check-input" type="checkbox" />
          </td>
          <td>{item.id}</td>
          <td>
            <div className="d-flex align-items-center gap-2">
              <div className="flex-shrink-0">
                <Image className="b-r-10 img-40" src={dynamicImage(`avatar/${item.image}`)} alt="avatar" />
              </div>
              <div className="flex-grow-1">
                <Link to={Href}>
                  <H6 className="f-w-500">{item.name}</H6>
                </Link>
                <span className="font-light f-w-400 f-13">
                  {item.email}
                </span>
              </div>
            </div>
          </td>
          <td>{item.project}</td>
          <td>{item.date}</td>
          <td>{item.amount}</td>
          <td>
            <Btn className={`edge-btn f-13 w-100`} color={`light-${item.color}`}>{item.status}</Btn>
          </td>
        </tr>
      ))}
    </>
  );
};

export default AllInvoicesTableBody;
