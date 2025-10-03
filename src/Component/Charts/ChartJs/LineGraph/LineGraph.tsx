import { Line } from "react-chartjs-2";
import { Card, CardBody, Col } from 'reactstrap'
import { ChatJSLineGraph } from '../../../../utils/Constant'
import { lineGraphChartData, lineGraphChartDataOption } from "../../../../Data/Charts/ChartJs/ChartJs";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";

const LineGraph = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={ChatJSLineGraph} borderClass={true} headClass="pb-0"/>
        <CardBody>
          <Line data={lineGraphChartData} options={lineGraphChartDataOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default LineGraph