import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { Href } from "../../../../utils/Constant";
import { Alerts, P } from "../../../../AbstractElements";
import { darkThemeList } from "../../../../Data/Ui-Kits/Alert/AlertData";

const DarkThemeLeftSection = () => {
  return (
    <Col lg="6">
      <P className="mb-1">Primary Alert</P>
      <Alerts color="primary" className="dark">
        <P>
          {`This is a `}
          <Link className="alert-link text-white" to={Href}> Primary alert</Link>
          {` with an example link. Check it out.`}
        </P>
      </Alerts>
      {darkThemeList.map(({ title, color }, index) => (
        <Fragment key={index}>
          <P className="mb-1">{title} Alert</P>
          <Alerts color={color} className="dark">
            <P>
              {`This is a `}
              <Link className="alert-link text-white" to={Href}>
                {title} alert
              </Link>
              {` with an example link. Check it out.`}
            </P>
          </Alerts>
        </Fragment>
      ))}
    </Col>
  );
};

export default DarkThemeLeftSection;
