import { Card, CardBody, Col } from 'reactstrap'
import { H4, P } from '../../../../AbstractElements'
import { articleData } from '../../../../Data/Miscellaneous/Faq/Faq'
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon'

const Article = () => {
  return (
    <>
      {articleData.map((item) => (
        <Col xl="4" sm={item.sm} className={`"box-col-${item.box}`} key={item.id}>
          <Card className="bg-primary height_equal">
            <CardBody>
              <div className="faq-widgets d-flex">
                <div className="flex-grow-1">
                  <H4>{item.title}</H4>
                  <P>{item.paragraph}</P>
                </div>
                <SvgIcon className='feather' iconId={item.icon} />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default Article