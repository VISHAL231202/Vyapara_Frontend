import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import { DonutChart } from '../../../../../utils/Constant'
import { donutChartData } from '../../../../../Data/Charts/ApexChart/ApexChartData'

const DonutCharts = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={DonutChart} borderClass={true} headClass='pb-0'/>
        <CardBody>
          <ReactApexChart options={donutChartData} series={donutChartData.series} type="donut" height={250} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default DonutCharts