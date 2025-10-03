import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { BreadcrumbBonusUi, BreadcrumbHome, BreadcrumbHeading, Href } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'

const StaticColoredBreadcrumb = () => {
  return (
    <Breadcrumb className="breadcrumb-colored mb-4 bg-primary">
      <BreadcrumbItem>
        <Link to={Href}>{BreadcrumbHome}</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link to={Href}>{BreadcrumbBonusUi}</Link>
      </BreadcrumbItem>
      <BreadcrumbItem active>{BreadcrumbHeading}</BreadcrumbItem>
    </Breadcrumb>
  )
}

export default StaticColoredBreadcrumb