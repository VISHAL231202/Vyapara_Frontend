import { Col } from "reactstrap";
import { H6, Image, LI, UL } from "../../../../AbstractElements";
import { designMeetingAvatarData } from "../../../../Data/Dashboard/Project/Project";
import { dynamicImage } from "../../../../Service";
import { Fragment } from "react";
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";

const DesignMeetingAvatar = () => {
  return (
    <Col xs="10" className="timeline-items">
      {designMeetingAvatarData.map((data, i) => (
        <Fragment key={i}>
          <div className={`timeline-box d-flex align-items-center b-w-39 b-t-${data.color}`} key={i} >
            <div className="flex-grow-1">
              <H6 className="f-15 f-w-600 mb-1">{data.title}</H6>
              <div className="font-light">
                <SvgIcon className="feather" iconId="clock" />
                <span className="font-light f-w-400 f-14">{data.time}</span>
              </div>
            </div>
            <div className="team-member text-end">
              <div className="customers d-inline-block avatar-group">
                <UL>
                  {data.avatar.map((item, i) => (
                    <LI className="d-inline-block p-0" key={i}>
                      <Image className="img-38 b-r-8" src={dynamicImage(`user/${item}`)} alt="#"/>
                    </LI>
                  ))}
                  <LI className="d-inline-block p-0">
                    <span className="b-r-10">+{data.number}</span>
                  </LI>
                </UL>
              </div>
            </div>
          </div>
          <hr className="my-4" />
        </Fragment>
      ))}
    </Col>
  );
};

export default DesignMeetingAvatar;
