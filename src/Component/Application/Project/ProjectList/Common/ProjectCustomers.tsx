import { Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { CommonProjectInterFace } from '../../../../../Type/Application/ProjectList/ProjectList'

const ProjectCustomers = ({ item }: CommonProjectInterFace) => {
  return (
    <div className='customers'>
        <UL className='simple-list' >
            <LI className='d-inline-block' >
                <Image className='img-30 rounded-circle' src={dynamicImage(`user/${item.customers_image1}`)} alt='user' />
            </LI>
            <LI className='d-inline-block' >
                <Image className='img-30 rounded-circle' src={dynamicImage(`user/${item.customers_image2}`)} alt='user' />
            </LI>
            <LI className='d-inline-block' >
                <Image className='img-30 rounded-circle' src={dynamicImage(`user/${item.customers_image3}`)} alt='user' />
            </LI>
            <LI className='d-inline-block ms-2' >
                <P className='f-12' >{`+${item.like} More`}</P>
            </LI>
        </UL>
    </div>
  )
}

export default ProjectCustomers