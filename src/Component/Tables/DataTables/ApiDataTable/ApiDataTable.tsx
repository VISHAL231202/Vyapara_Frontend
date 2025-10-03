import { Container, Row } from 'reactstrap'
import AddRows from './AddRows/AddRows'
import ChildRows from './ChildRows/ChildRows'
import RowSelectionAndDeletion from './RowSelectionAndDeletion/RowSelectionAndDeletion'
import CustomFiltering from './CustomFiltering/CustomFiltering'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { APIDataTables, DataTables } from '../../../../utils/Constant'

const ApiDataTableContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={APIDataTables} parent={DataTables} />
      <Container fluid className='basicinit-page'>
        <Row>
          <AddRows />
          <ChildRows />
          <RowSelectionAndDeletion />
          <CustomFiltering />
        </Row>
      </Container>
    </>
  )
}

export default ApiDataTableContainer