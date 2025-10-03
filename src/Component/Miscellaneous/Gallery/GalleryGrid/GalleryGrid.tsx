import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { Gallery, ImageGallery } from '../../../../utils/Constant'
import MyGallery from './MyGallery'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'

const GalleryGridContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Gallery} parent={Gallery} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card className='gallery-grid'>
              <CommonCardHeader title={ImageGallery} headClass='pb-0'/>
              <CardBody className="gallery my-gallery mb-0 row">
                  <MyGallery />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default GalleryGridContainer