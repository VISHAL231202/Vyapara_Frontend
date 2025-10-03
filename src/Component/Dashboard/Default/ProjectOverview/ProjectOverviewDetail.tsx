import { Col, Row } from "reactstrap";
import { H5, LI, Progressbar, UL } from "../../../../AbstractElements";
import {overviewData,projectOverviewData} from "../../../../Data/Dashboard/Default/Default";

const ProjectOverviewDetail = () => {
  return (
    <Row className="align-items-center">
      <Col xs="5" className="custom-width">
        {projectOverviewData.map((item, i) => (
          <Progressbar  color={item.color} value={item.value} key={i} animated className={`progress-striped-${item.color}`} />
        ))}
      </Col>
      <Col xs="7" className="d-sm-none d-md-block">
        <UL className="overview-details">
          {overviewData.map((item, i) => (
            <LI className="d-flex align-items-center p-0" key={i}>
              <div className={`circle-dot-${item.color}`}>
                <span />
              </div>
              <H5>
                {item.number}<span className="font-light ms-1">{item.status}</span>
              </H5>
            </LI>
          ))}
        </UL>
      </Col>
    </Row>
  );
};

export default ProjectOverviewDetail;
