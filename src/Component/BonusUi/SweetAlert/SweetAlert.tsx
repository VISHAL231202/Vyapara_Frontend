import { Container, Row } from 'reactstrap'
import BasicExample from './BasicExample/BasicExample'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BonusUi, SweetAlert } from '../../../utils/Constant'
import AdvanceSweetalert from './AdvanceSweetalert/AdvanceSweetalert'
import UniqueSweetalert from './UniqueSweetalert/UniqueSweetalert'
import DirectionSweetalert from './DirectionSweetalert/DirectionSweetalert'
import InputSweetalert from './InputSweetalert/InputSweetalert'
import GithubAvatar from './GithubAvatar/GithubAvatar'
import RTLSupport from './RTLSupport/RTLSupport'
import MessageTimer from './MessageTimer/MessageTimer'
import ModalWithImages from './ModalWithImages/ModalWithImages'

const SweetAlertContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={SweetAlert} parent={BonusUi} />
      <Container fluid>
        <Row>
          <BasicExample />
          <AdvanceSweetalert />
          <UniqueSweetalert />
          <DirectionSweetalert />
          <InputSweetalert />
          <GithubAvatar />
          <RTLSupport />
          <MessageTimer />
          <ModalWithImages />
        </Row>
      </Container>
    </>
  )
}

export default SweetAlertContainer