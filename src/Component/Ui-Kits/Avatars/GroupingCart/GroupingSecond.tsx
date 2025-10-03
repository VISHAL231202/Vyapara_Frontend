import { Image, LI, UL } from '../../../../AbstractElements'
import { groupingImageTwo } from '../../../../Data/Ui-Kits/Avtar/Avtar'
import { dynamicImage } from '../../../../Service'

const GroupingSecond = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <UL className='simple-list flex-row'>
        <LI className="d-inline-block">
          <Image className="img-60 rounded-circle" src={dynamicImage(`avatar/2.jpg`)} alt="image" />
        </LI>
        {groupingImageTwo.map(({ className, src }, index) => (
          <LI className="d-inline-block" key={index}>
            <Image className={`${className} h-auto`} src={dynamicImage(`${src}`)} alt="image" />
          </LI>
        ))}
      </UL>
    </div>
  )
}

export default GroupingSecond