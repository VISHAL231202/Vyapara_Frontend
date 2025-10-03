import { H6, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const HeaderProfile = () => {
  return (
    <div className="d-flex flex-wrap">
      <div className="media-size-email">
        <Image className="me-3 rounded-circle" src={dynamicImage("user/4.jpg")} alt="user" />
      </div>
      <div className="flex-grow-1">
        <H6 className="f-w-600">{'MARK JENCO'}</H6>
        <P>{'Markjecno@gmail.com'}</P>
      </div>
    </div>
  )
}

export default HeaderProfile