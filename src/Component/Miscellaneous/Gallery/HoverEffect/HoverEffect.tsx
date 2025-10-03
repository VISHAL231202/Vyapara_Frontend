import { Card, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { hoverData } from '../../../../Data/Miscellaneous/Gallery/Gallery'
import { Gallery, ImageHoverEffects } from '../../../../utils/Constant'
import ImageHoverEffectsCardBody from './ImageHoverEffectsCardBody'

const HoverEffectContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ImageHoverEffects} parent={Gallery} />
      <Container fluid>
        {hoverData.map((data, index) => (
          <Row key={index}>
            <Col sm="12">
              <Card>
                <CommonCardHeader title={`Hover Effect ${data}`} headClass='pb-0'/>
                <ImageHoverEffectsCardBody data={data} />
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
}

export default HoverEffectContainer