import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import { BreadcrumbAlert, BreadcrumbHome, BreadcrumbUiKits, DefaultBreadcrumbs, Href } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { breadcrumbData } from '../../../../Data/BonusUi/Breadcrumb/Breadcrumb'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const DefaultBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card>
        <CardHeaderCommon title={DefaultBreadcrumbs} span={breadcrumbData} headClass='pb-0' />
        <CardBody>
          <Breadcrumb className='mb-3'>
            <BreadcrumbItem active>
              <Link to={Href}>{BreadcrumbHome}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbUiKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="m-0">
            <BreadcrumbItem>
              <Link to={Href}>{BreadcrumbHome}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to={Href}>{BreadcrumbUiKits}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbAlert}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DefaultBreadcrumb