import { Col } from "reactstrap";
import { LI, P, UL } from "../../../../AbstractElements";
import { totalProjectDetailData } from "../../../../Data/Dashboard/Project/Project";

const TotalProjectDetail = () => {
  return (
    <Col xs="6">
      <UL className="project-details simple-list">
        {totalProjectDetailData.map((data, i) => (
          <LI className="d-flex align-items-center mt-3 justify-content-between p-0" key={i}>
            <div className="d-flex align-items-center">
              <div className={`circle-dot-${data.color}`}>
                <span />
              </div>
              <P className="ms-2 f-w-500">{data.title}</P>
            </div>
            <span className="ms-1 f-w-500">{data.count}</span>
          </LI>
        ))}
      </UL>
    </Col>
  );
};

export default TotalProjectDetail;
