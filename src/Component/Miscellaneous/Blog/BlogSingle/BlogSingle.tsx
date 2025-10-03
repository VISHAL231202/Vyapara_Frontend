import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import SingleBlogData from './SingleBlogData/SingleBlogData'
import CommentSection from './CommentSection/CommentSection'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Blog, BlogSingle } from '../../../../utils/Constant'

const BlogSingleContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={BlogSingle} parent={Blog} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="blog-single">
                  <SingleBlogData />
                  <CommentSection />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BlogSingleContainer