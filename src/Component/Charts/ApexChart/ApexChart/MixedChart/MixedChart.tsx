import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import { MixedCharts } from '../../../../../utils/Constant'
import { mixChartData } from '../../../../../Data/Charts/ApexChart/ApexChartData'

const MixedChart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={MixedCharts} borderClass={true} headClass='pb-0' />
        <CardBody>
          <div>
            <ReactApexChart options={mixChartData} series={mixChartData.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default MixedChart