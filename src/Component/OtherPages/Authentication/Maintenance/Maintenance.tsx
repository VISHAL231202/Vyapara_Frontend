import { Col, Container } from 'reactstrap'
import { H2, H4 } from '../../../../AbstractElements'
import { BackToHomePage, MAINTENANCE } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { maintenanceSvgData } from '../../../../Data/OtherPage/OtherPage'

const MaintenanceContainer = () => {
  return (
    <div className="page-wrapper">
      <div className="error-wrapper maintenance-bg">
        <Container>
          <Col xs="12">{maintenanceSvgData}</Col>
          <div className="maintenance-heading">
            <H2 className="headline">{MAINTENANCE}</H2>
          </div>
          <H4 className="sub-content">
            Our Site is Currently under maintenance We will be back Shortly
            <br /> Thank You For Patience
          </H4>
          <div>
            <Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/dashboard/default`}>{BackToHomePage}</Link>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default MaintenanceContainer