import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { BubbleCharts } from '../../../../../utils/Constant'
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import { bubbleChartData } from '../../../../../Data/Charts/ApexChart/ApexChartData'

const BubbleChart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={BubbleCharts} borderClass={true} headClass='pb-0'/>
        <CardBody>
          <div>
            <ReactApexChart options={bubbleChartData} series={bubbleChartData.series} type="bubble" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BubbleChart