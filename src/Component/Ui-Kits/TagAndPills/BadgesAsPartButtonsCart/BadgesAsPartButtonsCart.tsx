import { Card, CardBody, Col } from 'reactstrap'
import { Badges, Btn } from '../../../../AbstractElements'
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon'
import { badgeButtonData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import { BadgesAsPartButtons, Messages } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon'
import DynamicBadgesAsPartButtons from './DynamicBadgesAsPartButtons'

const BadgesAsPartButtonsCart = () => {
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={BadgesAsPartButtons} span={badgeButtonData} headClass='pb-0'/>
        <CardBody className='button-badge'>
          <div className="badge-spacing flex-column align-items-start">
            <Btn color="primary" className="d-flex align-items-center">{Messages}
              <Badges color="light" className="rounded-circle btn-p-space text-dark ms-2">
                <SvgIcon iconId='mail' className="feather"/>
              </Badges>
            </Btn>
            <DynamicBadgesAsPartButtons />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BadgesAsPartButtonsCart