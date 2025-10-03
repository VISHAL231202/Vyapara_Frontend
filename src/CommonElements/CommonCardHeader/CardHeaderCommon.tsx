import { CardHeader } from "reactstrap";
import H4 from "../Headings/H4Element";
import { Link } from "react-router-dom";
import CardHeaderDropdown from "./CardHeaderDropdown";
import { CardHeaderCommonType } from "../../Type/Layout/CommonElements/CommonCardHeader";

const CardHeaderCommon = ({title,subTitle,headClass,mainTitle,firstItem,secondItem,thirdItem,borderClass}:CardHeaderCommonType) => {
  return (
    <CardHeader className={`${headClass} ${!borderClass === true ? "card-no-border" : ""} `}>
      <H4>{title}</H4>
      {subTitle && <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>{subTitle}</Link> }
      {firstItem &&
      <CardHeaderDropdown mainTitle={mainTitle} firstItem={firstItem} secondItem={secondItem} thirdItem={thirdItem} />}
    </CardHeader>
  );
};

export default CardHeaderCommon;
