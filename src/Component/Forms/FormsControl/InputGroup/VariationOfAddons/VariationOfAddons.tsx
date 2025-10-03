import { Card, CardBody, Col, Row } from 'reactstrap'
import { VariationOfAddon } from '../../../../../utils/Constant'
import VariationAddonsFormContent from './VariationAddonsFormContent'
import VariationOfAddonsCardFooter from './VariationOfAddonsCardFooter'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { variationOfAddonData } from '../../../../../Data/Forms/FormsControl/InputGroup/InputGroup'

const VariationOfAddons = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={VariationOfAddon} span={variationOfAddonData} headClass='pb-0' />
        <CardBody className="card-wrapper input-group-wrapper">
          <Row>
            <Col>
              <VariationAddonsFormContent />
            </Col>
          </Row>
        </CardBody>
        <VariationOfAddonsCardFooter />
      </Card>
    </Col>
  )
}

export default VariationOfAddons