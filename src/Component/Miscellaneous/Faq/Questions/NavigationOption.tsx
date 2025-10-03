import { Link } from 'react-router-dom'
import { Badges, LI, UL } from '../../../../AbstractElements'
import { AskOurCommunity, FaqContactUs, Href } from '../../../../utils/Constant'
import { askQuestionData } from '../../../../Data/Miscellaneous/Faq/Faq'
import { FaEnvelope, FaSms } from 'react-icons/fa'

const NavigationOption = () => {
  return (
    <div className="navigation-option">
      <UL>
        {askQuestionData.map((item, i) => (
          <LI key={i}>
            <Link to={Href}>
              {item.icon} {item.title}
            </Link>
            {item.value && <Badges color="primary" pill className="pull-right">{item.value}</Badges>}
          </LI>
        ))}
      </UL>
      <hr/>
      <UL>
        <LI>
          <Link to={Href}>
            <FaSms/> {AskOurCommunity}
          </Link>
        </LI>
        <LI>
          <Link to={Href}>
           <FaEnvelope/> {FaqContactUs}
          </Link>
        </LI>
      </UL>
    </div>
  )
}

export default NavigationOption