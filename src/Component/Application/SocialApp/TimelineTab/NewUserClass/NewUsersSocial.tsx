import { H6, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { TimelineDataType } from '../../../../../Type/Application/SocialApp/SocialApp'
import SvgIcon from '../../../../../CommonElements/SVG/SvgIcon'

const NewUsersSocial = ({data} : TimelineDataType) => {
  return (
    <div className="new-users-social">
      <div className='d-flex'>
        <Image className="rounded-circle image-radius m-r-15" src={dynamicImage("avatar/4.jpg")} alt="user121"/>
        <div className='flex-grow-1'>
          <H6 className="mb-0 f-w-600">{data.name}</H6>
          <P>{data.date}</P>
        </div>
        <span className="pull-right mt-0">
          <SvgIcon iconId='more-vertical' className='feather' />
        </span>
      </div>
    </div>
  )
}

export default NewUsersSocial