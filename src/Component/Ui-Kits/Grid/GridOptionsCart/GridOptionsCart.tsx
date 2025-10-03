import { Card, CardBody, Col, Table } from 'reactstrap'
import GridOptionTableHead from './GridOptionTableHead'
import GridOptionTableBody from './GridOptionTableBody'
import { gridData } from '../../../../Data/Ui-Kits/Grid/GridData'
import { GridOptions } from '../../../../utils/Constant'
import CardHeaderCommon from '../../CardHeaderCommon'

const GridOptionsCart = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={GridOptions} span={gridData} headClass="pb-0" />
        <CardBody>
          <Table bordered striped responsive>
            <GridOptionTableHead />
            <GridOptionTableBody />
          </Table>
        </CardBody>
      </Card>
    </Col>
  )
}

export default GridOptionsCart