import { Container, Row } from 'reactstrap'
import SlidesOnly from './SlidesOnly/SlidesOnly'
import WithControls from './WithControls/WithControls'
import AutoPlayVariant from './AutoPlayVariant/AutoPlayVariant'
import WithIndicators from './WithIndicators/WithIndicators'
import WithCaptions from './WithCaptions/WithCaptions'
import CrossFade from './CrossFade/CrossFade'
import IndividualInterval from './IndividualInterval/IndividualInterval'
import DisableTouchSwiping from './DisableTouchSwiping/DisableTouchSwiping'
import DarkVariant from './DarkVariant/DarkVariant'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BonusUi, Slider } from '../../../utils/Constant'
import MouseOver from './MouseOver'

const OwlCarouselContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Slider} parent={BonusUi} />
      <Container fluid className='slider-page'>
        <Row>
          <SlidesOnly />
          <WithControls />
          <AutoPlayVariant />
          <MouseOver/>
          <WithIndicators />
          <WithCaptions />
          <CrossFade />
          <IndividualInterval />
          <DisableTouchSwiping />
          <DarkVariant />
        </Row>
      </Container>
    </>
  )
}

export default OwlCarouselContainer