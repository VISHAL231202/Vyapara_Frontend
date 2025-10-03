import { UL } from '../../../../../AbstractElements';
import { CommonProfileLikeType } from '../../../../../Type/Application/Users/UsersProfile';
import IconList from './IconList';

const CommonProfileLike = ({commentsNumber,likeNumber}:CommonProfileLikeType) => {
  return (
    <div className="like-comment">
      <UL className="simple-list list-inline flex-row">
        <IconList endNumber={likeNumber} like />
        <IconList endNumber={commentsNumber}  />
      </UL>
    </div>
  )
}

export default CommonProfileLike