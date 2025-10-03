import { Container, Row } from 'reactstrap'
import BasicTypeAhead from './BasicTypeAhead/BasicTypeAhead'
import RemoteTypeAhead from './RemoteTypeAhead/RemoteTypeAhead'
import CustomTemplates from './CustomTemplates/CustomTemplates'
import MultipleSectionsWithHeaders from './MultipleSectionsWithHeaders/MultipleSectionsWithHeaders'
import ScrollableDropdownMenu from './ScrollableDropdownMenu/ScrollableDropdownMenu'
import RtlSupport from './RtlSupport/RtlSupport'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { FormsWidgets, Typeahead } from '../../../../utils/Constant'

const TypeaheadContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Typeahead} parent={FormsWidgets} />
      <Container fluid className='typeahead-page'>
        <Row>
          <BasicTypeAhead />
          <RemoteTypeAhead />
          <CustomTemplates />
          <MultipleSectionsWithHeaders />
          <ScrollableDropdownMenu />
          <RtlSupport />
      </Row>
      </Container>
    </>
  )
}

export default TypeaheadContainer