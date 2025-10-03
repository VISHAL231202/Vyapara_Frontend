import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { BonusUi, ImageCropper } from '../../../utils/Constant'
import ImageCropperBody from './ImageCropperBody'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { imageCropperData } from '../../../Data/BonusUi/ImageCropper/ImageCropper'
import CardHeaderCommon from '../../Ui-Kits/CardHeaderCommon'

const ImageCropperContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ImageCropper} parent={BonusUi} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeaderCommon title={ImageCropper} span={imageCropperData} />
              <CardBody>
                <ImageCropperBody />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ImageCropperContainer