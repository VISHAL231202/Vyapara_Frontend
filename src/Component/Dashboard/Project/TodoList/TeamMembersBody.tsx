import { Link } from "react-router-dom";
import { H6, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Href } from "../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { teamMembersBodyData } from "../../../../Data/Dashboard/Project/Project";

const TeamMembersBody = () => {
  return (
    <>
      {teamMembersBodyData.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="d-flex align-items-center gap-2">
              <div className="flex-shrink-0">
                <Image className="img-40 b-r-10" src={dynamicImage(`avatar/${data.image}`)} alt="avatar" />
              </div>
              <div className="flex-grow-1">
                <Link to={Href}>
                  <H6 className="f-w-500">{data.clientName}</H6>
                  <span className="font-light f-w-400 f-13">
                    {data.email}
                  </span>
                </Link>
              </div>
            </div>
          </td>
          <td>{data.designation}</td>
          <td>{data.task}</td>
          <td>
            <div className="team-chart">
              <ReactApexChart options={data.chart} series={data.chart.series} height={80} width={100} type="line" />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TeamMembersBody;
