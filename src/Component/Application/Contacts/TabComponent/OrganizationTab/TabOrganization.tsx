import { Link } from 'react-router-dom'
import { TabPane } from 'reactstrap'
import { H5, H6, Image, LI, P, UL } from '../../../../../AbstractElements'
import { organizationList } from '../../../../../Data/Application/Contacts/Contacts'
import { dynamicImage } from '../../../../../Service'
import { Delete, Edit, EmailAddress, Gender, General, History, Href, Name, Print } from '../../../../../utils/Constant'

const TabOrganization = () => {

  return (
    <>
      {organizationList.map((item, i) =>
        <TabPane tabId={item.activeTab} key={i}>
          <div className="profile-mail">
            <div className="d-flex">
              <Image className='img-100 img-fluid m-r-20 rounded-circle update_img_5' src= {dynamicImage(`${item.avatar}`)} alt= 'images'  />
              <div className="flex-grow-1 mt-0">
                <H5>
                  <span className="first_name_5">{item.name}</span>
                  <span className="last_name_5">{"jecno"}</span>
                </H5>
                <P className='email_add_5' >{item.email}</P>
                <UL className="simple-list flex-row">
                  <LI><Link className='font-primary' to={Href}>{Print}</Link></LI>
                  <LI><Link className='font-primary' to={Href}>{Edit}</Link></LI>
                  <LI><Link className='font-primary' to={Href}>{Delete}</Link></LI>
                  <LI><Link className='font-primary' to={Href}>{History}</Link></LI>
                </UL>
              </div>
            </div>
            <div className="email-general">
              <H6 className='mb-3'>{General}</H6>
              <UL>
                <LI>{Name}<span className="font-primary first_name_2">{item.email}</span></LI>
                <LI>{Gender}<span className="font-primary first_name_2">{item.gender}</span></LI>
                <LI>{EmailAddress}<span className="font-primary first_name_2">{item.email}</span></LI>
              </UL>
            </div>
          </div>
        </TabPane>
      )}
    </>
  )
}

export default TabOrganization