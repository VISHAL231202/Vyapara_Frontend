import { H5, LI, UL } from '../../../../AbstractElements'
import { CardType } from '../../../../Type/Application/Users/UsersProfile'
import { Followers, Following, Posts } from '../../../../utils/Constant'

const UserCardsFooter :React.FC<CardType> = ({ item }) => {
  return (
    <UL className="social-follow simple-list flex-row justify-content-center">
      <LI className='p-0'>
        <H5 className="mb-0">{item.follower}</H5>
        <span className="font-light">{Posts}</span>
      </LI>
      <LI className='p-0'>
        <H5 className="mb-0">{item.following}k</H5>
        <span className="font-light">{Followers}</span>
      </LI>
      <LI className='p-0'>
        <H5 className="mb-0">{item.totalPost}</H5>
        <span className="font-light">{Following}</span>
      </LI>
    </UL>
  )
}

export default UserCardsFooter