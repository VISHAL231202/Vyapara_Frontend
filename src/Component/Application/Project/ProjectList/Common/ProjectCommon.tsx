import { Col } from 'reactstrap'
import { Badges, H5, Image, P, Progressbar } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Done } from '../../../../../utils/Constant'
import ProjectDetails from './ProjectDetails'
import ProjectCustomers from './ProjectCustomers'
import { CommonProjectInterFace } from '../../../../../Type/Application/ProjectList/ProjectList'

const ProjectCommon = ({ item }: CommonProjectInterFace) => {
  return (
    <Col xxl="4" md="6" >
      <div className={`project-box font-dark bg-light-${item.badge === 'Done' ? 'success' : 'danger'}`}>
        <Badges color={`${item.badge === 'Done' ? 'success' : 'danger'}`}>{item.badge}</Badges>
        <H5 className='f-w-500 mb-2'>{item.title}</H5>
        <div className='d-flex mb-2'>
          <Image className='img-20 me-1 rounded-circle' src={dynamicImage(`user/${item.image}`)} alt='images' />
          <P className="font-light">{item.sites}</P>
        </div>
        <P>{item.description}</P>
        <ProjectDetails item={item}/>
        <ProjectCustomers item={item}/>
        <div className='project-status align-items-center gap-1 mb-2'>
          <div className='d-flex mb-0'>
            <P className="mb-0">{item.progress}% </P>
            <span>{Done}</span>
          </div>
          <Progressbar animated={item.progress !== 100 ? true : false} color={item.progress === 100 ? 'success' : 'danger'} value={item.progress} style={{ height: '5px' }} />
        </div>
      </div>
    </Col>
  )
}

export default ProjectCommon