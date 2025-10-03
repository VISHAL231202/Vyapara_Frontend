import { ScrollingContent, ScrollingModalHeading } from '../../../../utils/Constant'
import { useState } from 'react';
import CommonModal from '../Common/CommonModal';
import WedDesigners from './WedDesigners';
import UXDesigner from './UXDesigner';
import { Btn } from '../../../../AbstractElements';

const ScrollingModal = () => {
  const [scrollingModal, setScrollingModal] = useState(false);
  const scrollModalToggle = () => setScrollingModal(!scrollingModal);
  return (
    <>
      <Btn color="success" className='px-xl-2 px-xxl-3' onClick={scrollModalToggle}>{ScrollingContent}</Btn>
      <CommonModal isOpen={scrollingModal} toggle={scrollModalToggle} title={ScrollingModalHeading}>
        <WedDesigners />
        <UXDesigner />
      </CommonModal>
    </>
  )
}

export default ScrollingModal