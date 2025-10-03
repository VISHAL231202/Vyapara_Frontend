import { TabContent, TabPane } from "reactstrap";
import { ScheduleTimeTabContentPropsType } from "../../../../Type/Dashboard/DefaultType";
import { H5, H6, Image, LI, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { scheduleTimeTabContent } from "../../../../Data/Dashboard/Default/Default";

const ScheduleTimeTabContent = ({ tabId }: ScheduleTimeTabContentPropsType) => {
  return (
    <TabContent id="myTabContent" activeTab={tabId}>
      {scheduleTimeTabContent.map((item, i) => (
        <TabPane tabId={item.id} key={i}>
          <UL className="activity-update">
            {item.TabContentData.map((data, i) => (
              <LI className={`d-flex p-0 align-items-center b-l-${data.color}`} key={i}>
                <div className="flex-grow-1">
                  <span>{data.time}</span>
                  <H5>{data.title}</H5>
                  <H6>{data.comment}</H6>
                </div>
                <div className="flex-shrink-0">
                  <Image className="img-40 b-r-10" src={dynamicImage(`avatar/${data.image}`)} alt="avatar"/>
                </div>
              </LI>
            ))}
          </UL>
        </TabPane>
      ))}
    </TabContent>
  );
};

export default ScheduleTimeTabContent;
