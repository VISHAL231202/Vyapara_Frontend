import { CardBody } from "reactstrap";
import { Href } from "../../../../utils/Constant";
import { Link } from "react-router-dom";
import { Badges } from "../../../../AbstractElements";
import { CommonTagCardBodyType } from "../../../../Type/Ui-Kits/UiKitsTypes";
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";

const CommonTagAndPillsCardBody:React.FC<CommonTagCardBodyType> = ({ data, number,pill } ) => {
  return (
    <CardBody>
      <div className="badge-spacing">
        <>
          {data &&
            data.map(({ className, text}, index) => (
              <Badges pill={pill} color={text} className={`text-capitalize ${className}`} key={index}>
                {text}
              </Badges>
            ))}
          {number &&
            number.map(({ className, text,icon ,iconClass}, index) => (
              <Link to={Href} className={`badge ${className}`} key={index}>
                {text && text} 
                {icon && <SvgIcon iconId={icon} className={iconClass}/>}
              </Link>
            ))}
        </>
      </div>
    </CardBody>
  );
};

export default CommonTagAndPillsCardBody;