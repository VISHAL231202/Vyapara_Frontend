import { Fragment, useState } from 'react'
import { SmallModals } from '../../../../../utils/Constant';
import CommonModal from '../../Common/CommonModal';
import { smallData } from '../../../../../Data/Ui-Kits/Modal/Modal';
import { Btn, H6, P } from '../../../../../AbstractElements';
import SvgIcon from '../../../../../CommonElements/SVG/SvgIcon';

const SmallModal = () => {
  const [smallScreen, setSmallScreen] = useState<boolean>(false);
  const smallScreenToggle = () => setSmallScreen(!smallScreen);
  return (
    <>
      <Btn color="primary" onClick={smallScreenToggle}>{SmallModals}</Btn>
      <CommonModal size="sm" isOpen={smallScreen} toggle={smallScreenToggle} sizeTitle="Small modal" modalBodyClassName="dark-modal">
        <div className="large-modal-header">
          <SvgIcon iconId='chevrons-right' className='feather' />
          <H6>Web Design </H6>
        </div>
        <P className="modal-padding-space mb-2">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</P>
        {smallData.map(({ title, text }, index) => (
          <Fragment key={index}>
            <div className="large-modal-header">
              <SvgIcon iconId='chevrons-right' className='feather' />
              <H6>{title}</H6>
            </div>
            <P className="modal-padding-space">{text}</P>
          </Fragment>
        ))}
      </CommonModal>
    </>
  )
}

export default SmallModal