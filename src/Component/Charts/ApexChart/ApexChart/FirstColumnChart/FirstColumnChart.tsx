import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import CardHeaderCommon from '../../../../../CommonElements/CommonCardHeader/CardHeaderCommon'
import { columnChartData } from '../../../../../Data/Charts/ApexChart/ApexChartData'
import { ColumnCharts } from '../../../../../utils/Constant'

const FirstColumnChart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={ColumnCharts} borderClass={true} headClass='pb-0' />
        <CardBody>
          <div>
            <ReactApexChart options={columnChartData} series={columnChartData.series} type="bar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FirstColumnChart