import { Container, Row } from 'reactstrap'
import SizesCart from './SizesCart/SizesCart'
import StatusIndicatorCart from './StatusIndicatorCart/StatusIndicatorCart'
import ShapsCart from './ShapsCart/ShapsCart'
import RatioCart from './RatioCart/RatioCart'
import GroupingCart from './GroupingCart/GroupingCart'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Avatar, UiKits } from '../../../utils/Constant'
import GroupingWithCounter from './GroupingWithCounter/GroupingWithCounter'

const AvatarsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Avatar} parent={UiKits} />
      <Container fluid>
        <Row>
          <SizesCart />
          <StatusIndicatorCart />
          <ShapsCart />
          <GroupingCart />
          <RatioCart />
          <GroupingWithCounter />
        </Row>
      </Container>
    </>
  )
}

export default AvatarsContainer