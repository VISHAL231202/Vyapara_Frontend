import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { Btn, LI, UL } from '../../../../AbstractElements';
import { FileFilter } from '../../../../utils/Constant';
import { sideButtons } from '../../../../Data/Application/FileSideBar/FileSideBar';
import StoragePlan from './StoragePlan';
import PricingPlans from './PricingPlans';
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon';

const FileSideBar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const OnHandelClick = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <Col xl="3" className="box-col-6 pe-0">
      <div className="md-sidebar job-sidebar">
        <Btn color="primary" className="md-sidebar-toggle" onClick={OnHandelClick}>
          {FileFilter}
        </Btn>
        <div className={`md-sidebar-aside custom-scrollbar ${IsOpen ? "open" : ""}`}>
          <div className="file-sidebar">
            <Card>
              <CardBody>
                <UL className="simple-list">
                  {sideButtons.map((item, i) => (
                    <LI className='p-0' key={i}>
                      <Btn className={item.className}>
                        <SvgIcon iconId={item.icon} className='feather' />
                        {item.title}
                      </Btn>
                    </LI>
                  ))}
                </UL>
                <hr style={{ opacity: 0.25 }} />
                <StoragePlan />
                <hr style={{ opacity: 0.25 }} />
                <PricingPlans />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default FileSideBar