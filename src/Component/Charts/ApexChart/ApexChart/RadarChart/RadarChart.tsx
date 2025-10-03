import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { RadarCharts } from '../../../../../utils/Constant'
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import { radarChartData } from '../../../../../Data/Charts/ApexChart/ApexChartData'

const RadarChart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={RadarCharts} borderClass={true} headClass='pb-0' />
        <CardBody className='mx-auto'>
          <ReactApexChart options={radarChartData} series={radarChartData.series} type="radar" height={350} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default RadarChart