import { H6, P } from '../../../../../AbstractElements'
import SvgIcon from '../../../../../CommonElements/SVG/SvgIcon'
import { activityLogData } from '../../../../../Data/Application/SocialApp/SocialApp'
import { AboutPropsType } from '../../../../../Type/Application/SocialApp/SocialApp'

const MyActivity = ({ Heading }: AboutPropsType) => {
  return (
    <div className="my-activity">
      <H6 className="f-w-600 mb-3">{Heading}</H6>
      {activityLogData.map((item) => (
        <P key={item.id}>
          <span><SvgIcon iconId={item.icon} className='feather m-r-20' /></span>
          {item.description}
        </P>
      ))}
    </div>
  )
}

export default MyActivity