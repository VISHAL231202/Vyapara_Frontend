import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import { SVG } from '../../../../AbstractElements'
import { variationOfBreadcrumbData } from '../../../../Data/BonusUi/Breadcrumb/Breadcrumb'
import { Href, VariationOfBreadcrumbs } from '../../../../utils/Constant'
import CardHeaderCommon from '../../../Ui-Kits/CardHeaderCommon'

const VariationOfBreadcrumb = () => {
  return (
    <Col sm="6">
      <Card>
        <CardHeaderCommon title={VariationOfBreadcrumbs} span={variationOfBreadcrumbData} headClass='pb-0' />
        <CardBody className="breadcrumb-space">
          <Breadcrumb className="breadcrumb-no-divider mb-3 gap-2">
            <BreadcrumbItem className="mb-1 mb-xl-0">
              <Link to={Href}>{`Home`}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem className="ps-0 mb-1 mb-xl-0">
              <Link to={Href}>{`Chat`}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active className="ps-0">
              {`Video Chat`}
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="bg-white p-l-0">
            <BreadcrumbItem>
              <Link to={Href}>
                <SVG className='home-icon' iconId='Home' />
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>{`Blog`}</BreadcrumbItem>
            <BreadcrumbItem active className="ps-0">{`Blog Details`}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default VariationOfBreadcrumb