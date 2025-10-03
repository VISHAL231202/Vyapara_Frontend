import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import TicketList from './TicketList/TicketList'
import TicketTable from './TicketTable/TicketTable'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Apps, SupportTicket, SupportTicketList } from '../../../utils/Constant'
import CommonCardHeader from '../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { supportData } from '../../../Data/Miscellaneous/SupportTicket/SupportTicket'

const SupportTicketContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={SupportTicket} parent={Apps} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader headClass='pb-0' title={SupportTicketList} span={supportData} />
              <CardBody className='support-ticket'>
                <TicketList />
                <TicketTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SupportTicketContainer