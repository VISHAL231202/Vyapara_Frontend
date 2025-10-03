import { useState } from 'react'
import CommonModal from '../../Common/CommonModal';
import { EdminSignUp, OpenModalForEdmin } from '../../../../../utils/Constant';
import { Btn, H3 } from '../../../../../AbstractElements';
import OpenModalForm from './OpenModalForm';

const OpenModalEdmin = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModalToggle = () => setOpenModal(!openModal);
  return (
    <>
      <Btn color="primary" onClick={openModalToggle}>{OpenModalForEdmin}</Btn>
      <CommonModal isOpen={openModal} toggle={openModalToggle} modalBodyClassName="p-0" heading="Edmin SIGN-UP">
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <H3 className="modal-header justify-content-center border-0">{EdminSignUp}</H3>
          <OpenModalForm modal={openModalToggle}/>
        </div>
      </CommonModal>
    </>
  )
}

export default OpenModalEdmin