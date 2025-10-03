import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { AreaSpalineCharts } from '../../../../../utils/Constant'
import { areaSaplingChart } from '../../../../../Data/Charts/ApexChart/ApexChartData'
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon'

const AreaSpalineChart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={AreaSpalineCharts} borderClass={true} headClass='pb-0'/>
        <CardBody>
          <div>
            <ReactApexChart options={areaSaplingChart} series={areaSaplingChart.series} type="area" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default AreaSpalineChart