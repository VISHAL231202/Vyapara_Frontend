import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import { BarCharts } from '../../../../../utils/Constant'
import { barChartData } from '../../../../../Data/Charts/ApexChart/ApexChartData'

const BarChart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={BarCharts} borderClass={true} headClass='pb-0' />
        <CardBody>
          <div>
            <ReactApexChart options={barChartData} series={barChartData.series} type="rangeBar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BarChart