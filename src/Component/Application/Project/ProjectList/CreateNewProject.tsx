import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { CreateNewProjects } from '../../../../utils/Constant'
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon'

const CreateNewProject = () => {
  return (
    <Col md="6" className='d-md-block d-none'>
      <Link className="btn btn-primary d-flex align-items-center" to={`${process.env.PUBLIC_URL}/project/createnew`} >
        <SvgIcon className='feather' iconId='plus-square' />
        {CreateNewProjects}
      </Link>
    </Col>
  )
}

export default CreateNewProject