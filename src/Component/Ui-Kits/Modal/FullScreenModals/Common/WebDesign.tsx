import { H6, P } from '../../../../../AbstractElements'
import SvgIcon from '../../../../../CommonElements/SVG/SvgIcon'
import { commonWebData } from '../../../../../Data/Ui-Kits/Modal/Modal'
import { WebDesigner, WebDesigns } from '../../../../../utils/Constant'

const WebDesign = () => {
  return (
    <>
      <div className="large-modal-header">
        <SvgIcon iconId='chevrons-right' className='feather' />
        <H6>{WebDesigns}</H6>
      </div>
      <P className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</P>
      <H6>{WebDesigner}</H6>
      {commonWebData.map(({ title, className ,pClassName}, index) => (
        <div className={`d-flex ${className}`} key={index}>
          <div className="flex-shrink-0">
            <SvgIcon iconId='arrow-right-circle' className='feather svg-modal' />
          </div>
          <div className="flex-grow-1 ms-2">
            <P className={`mb-0 ${pClassName && pClassName}`}>{title}</P>
          </div>
        </div>
      ))}
    </>
  )
}

export default WebDesign