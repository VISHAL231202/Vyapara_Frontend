import { Media } from 'reactstrap'
import { H5, H6, Image, P } from '../../../../../AbstractElements'
import { EmailAddress, General } from '../../../../../utils/Constant'
import { PrintPreviewPropsType } from '../../../../../Type/Application/Contacts/Contacts'
import { dynamicImage } from '../../../../../Service'

const PrintPreview = ({selectedUser}:PrintPreviewPropsType) => {
  return (
    <div className="profile-mail pt-0" id="DivIdToPrint">
      <div className="d-flex">
        <Image className= 'img-100 img-fluid m-r-20 rounded-circle' src= {dynamicImage(`${selectedUser.avatar}`)} alt= 'users' />
        <Media className="flex-grow-1 mt-0">
          <H5>
            <span id="printname">{selectedUser.name}</span>
            <span id="printlast">{selectedUser.sureName}</span>
          </H5>
          <P>{selectedUser.name}{'@gmail.com'}</P>
        </Media >
      </div>
      <div className="email-general">
        <H6>{General}</H6>
        <P>{EmailAddress}:<span className="font-primary" id="mailadd">{selectedUser.sureName}{'@gmail.com'}</span></P>
      </div>
    </div>
  )
}

export default PrintPreview