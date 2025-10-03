import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import { RadialBarCharts } from '../../../../../utils/Constant'
import { circleChartData } from '../../../../../Data/Charts/ApexChart/ApexChartData'

const RadialBarChart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={RadialBarCharts} borderClass={true} headClass='pb-0' />
        <CardBody className='mx-auto'>
          <ReactApexChart options={circleChartData} series={circleChartData.series} type="radialBar" height={375} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default RadialBarChart