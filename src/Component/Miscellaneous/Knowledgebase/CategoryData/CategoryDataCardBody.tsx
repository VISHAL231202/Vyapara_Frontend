import { Link } from 'react-router-dom'
import { CardBody, Col, Row } from 'reactstrap'
import { Badges, H6, LI, UL } from '../../../../AbstractElements'
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon'
import { knowledgeBaseData } from '../../../../Data/Miscellaneous/KnowledgeBase/KnowledgeBase'
import { Href } from '../../../../utils/Constant'

const CategoryDataCardBody = () => {
  return (
    <CardBody>
      <Row className="browse g-sm-4 g-3">
        {knowledgeBaseData.map((data) => (
          <Col xl="4" md="6" key={data.id} className="xl-50">
            <div className="browse-articles">
              <H6>
                <span>
                  <SvgIcon iconId={"archive"} className='feather' />
                </span>{data.title}
              </H6>
              <UL className='simple-list'>
                {data.knowledgeList &&
                  data.knowledgeList.map((data, index2) => (
                    <LI key={index2} className="border-0">
                      <Link to={Href}>
                        {data.fileTextIcon ? (<span><SvgIcon iconId='file-text' className='feather' /></span>) : (<span><SvgIcon iconId='arrow-right' className='feather' /></span>)}
                        <span>{data.text}</span>
                        {data.badge ? <Badges color="primary" className="pull-right">{data.badge}</Badges> : " "}
                      </Link>
                    </LI>
                  ))}
              </UL>
            </div>
          </Col>
        ))}
      </Row>
    </CardBody>
  )
}

export default CategoryDataCardBody