import { Bar } from "react-chartjs-2";
import { Card, CardBody, Col } from 'reactstrap'
import { ChartJSBarChart } from '../../../../utils/Constant'
import { chartJsBarChartData, chartJsBarChartDataOption } from "../../../../Data/Charts/ChartJs/ChartJs";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";

const BarChart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={ChartJSBarChart} borderClass={true} headClass="pb-0"/>
        <CardBody>
          <div className="chart-container">
            <Bar data={chartJsBarChartData} options={chartJsBarChartDataOption} width={778} height={400} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BarChart