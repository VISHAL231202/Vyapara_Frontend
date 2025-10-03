import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import { CandlestickCharts } from '../../../../../utils/Constant'
import { candleStickChartData } from '../../../../../Data/Charts/ApexChart/ApexChartData'

const CandlestickChart = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={CandlestickCharts} borderClass={true} headClass='pb-0' />
        <CardBody>
          <div>
            <ReactApexChart options={candleStickChartData} series={candleStickChartData.series} type="candlestick" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CandlestickChart