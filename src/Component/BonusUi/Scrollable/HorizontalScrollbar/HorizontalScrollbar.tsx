import { Card, CardBody, Col, Row } from 'reactstrap'
import { HorizontalScrollbars } from '../../../../utils/Constant'
import ScrollBar from 'react-perfect-scrollbar'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { horizontalScrollData, horizontalScrollDataList } from '../../../../Data/BonusUi/Scrollable/Scrollable'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const HorizontalScrollbar = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={HorizontalScrollbars} span={horizontalScrollData} headClass='pb-0' />
        <CardBody className='horizontal-scroll-body'>
          <ScrollBar className="horizontal-scroll scroll-demo" style={{ width: "100%", height: "300px" }}>
            <div className="horz-scroll-content scroll-content-width">
              <Row>
                <Col sm="2">
                  <div className="horizontal-img">
                    <Image className="img-fluid" src={dynamicImage(`scrollbar/fashion1.jpg`)} alt="girl" />
                  </div>
                </Col>
                {horizontalScrollDataList.map((src, index) => (
                  <Col sm="2" key={index}>
                    <div className="horizontal-img">
                      <Image className="img-fluid" src={dynamicImage(src)} alt="girl" />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  )
}

export default HorizontalScrollbar