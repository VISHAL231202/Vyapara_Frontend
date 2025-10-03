import { Btn, H5, H6, Image, LI, P, UL } from '../../../../AbstractElements';
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";
import { dynamicImage } from '../../../../Service';
import { FREE, PricingPlan, Selected, TrialVersion } from '../../../../utils/Constant';

const PricingPlans = () => {
  return (
    <UL className='simple-list'>
      <LI className="p-0">
        <Btn outline color="primary w-auto">
          <SvgIcon iconId="grid" className="feather" />
          {PricingPlan}
        </Btn>
      </LI>
      <div className="pricing-plan">
        <H6>{TrialVersion} </H6>
        <H5>{FREE}</H5>
        <P>{'100GB Space'}</P>
        <Btn size="xs" color="primary" outline>{Selected}</Btn>
        <Image className="bg-img" src={dynamicImage('file-manager/folder.png')} alt="dashboard"/>
      </div>
    </UL>
  )
}

export default PricingPlans