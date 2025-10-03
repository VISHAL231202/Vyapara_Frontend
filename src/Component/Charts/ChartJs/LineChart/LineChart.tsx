import { Line } from "react-chartjs-2";
import { Card, CardBody, Col } from 'reactstrap'
import { ChatJSLineChart } from '../../../../utils/Constant'
import { lineChartData, lineChartDataOption } from "../../../../Data/Charts/ChartJs/ChartJs";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";

const LineChart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={ChatJSLineChart} borderClass={true} headClass="pb-0"/>
        <CardBody>
          <div className="chart-container">
            <Line data={lineChartData} options={lineChartDataOption} width={778} height={400} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LineChart