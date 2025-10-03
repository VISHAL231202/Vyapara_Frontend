import { Card, Col } from 'reactstrap'
import { CalendarBootstrap } from '../../../../../utils/Constant'
import BootstrapCalendarBody from './BootstrapCalendarBody'
import CommonCardHeader from '../../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { bootstrapCalendarData } from '../../../../../Data/Forms/FormsWidgets/Datepicker/Datepicker'

const BootstrapCalendar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CalendarBootstrap} span={bootstrapCalendarData} headClass='pb-0' />
        <BootstrapCalendarBody/>
      </Card>
    </Col>
  )
}

export default BootstrapCalendar