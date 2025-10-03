import { Card, CardBody, Col } from 'reactstrap'
import { BadgeHeadingsExample } from '../../../../utils/Constant'
import { badgeExData } from '../../../../Data/Ui-Kits/TagAndPills/TagAndPills'
import { Badges, H1, H2, H3, H4, H5, H6, P } from '../../../../AbstractElements'
import CardHeaderCommon from '../../CardHeaderCommon'

const BadgeHeadingsExampleCart = () => {
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={BadgeHeadingsExample} span={badgeExData} headClass='pb-0' />
        <CardBody>
          <H1 className="badge-heading">Badge Heading 1
            <Badges color="primary">Latest</Badges>
          </H1>
          <H2 className="badge-heading">Badge Heading 2
            <Badges color="secondary">Trending</Badges>
          </H2>
          <H3 className="badge-heading">Badge Heading 3
            <Badges color="tertiary">Checkout</Badges>
          </H3>
          <H4 className="badge-heading">Badge Heading 4
            <Badges color="success">New</Badges>
          </H4>
          <H5 className="badge-heading">Badge Heading 5
            <Badges color="warning">Inbox</Badges>
          </H5>
          <H6 className="badge-heading">Badge Heading 6
            <Badges color="danger">Login</Badges>
          </H6>
          <P className="badge-heading pb-0 mb-0">Badge Paragraph
            <Badges color="dark">Logout</Badges>
          </P>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BadgeHeadingsExampleCart