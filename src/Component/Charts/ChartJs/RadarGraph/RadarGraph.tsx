import { Radar } from "react-chartjs-2";
import { Card, CardBody, Col } from 'reactstrap'
import { ChatJSRadarGraph } from '../../../../utils/Constant'
import { radarGraphChartData } from "../../../../Data/Charts/ChartJs/ChartJs";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";

const RadarGraph = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={ChatJSRadarGraph} borderClass={true} headClass="pb-0"/>
        <CardBody>
          <div className="chart-container chart-block">
            <Radar data={radarGraphChartData} options={radarGraphChartData.options} width={778} height={400} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RadarGraph