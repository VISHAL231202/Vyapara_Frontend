import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Modal } from 'reactstrap'
import { Badges, H4, H5, Image, LI, UL } from '../../../../../AbstractElements'
import SvgIcon from '../../../../../CommonElements/SVG/SvgIcon'
import { balanceData } from '../../../../../Data/Ui-Kits/Modal/Modal'
import { dynamicImage } from '../../../../../Service'
import { BalanceModalType } from '../../../../../Type/Ui-Kits/UiKitsTypes'

const BalanceModal:React.FC<BalanceModalType> = ({ modalThird, modalThirdToggle }) => {
  return (
    <Modal centered fade isOpen={modalThird} toggle={modalThirdToggle}>
      <Col xl="12">
        <Card className="balance-box mb-0">
          <CardBody>
            <div className="balance-profile">
              <div className="balance-img">
                <Image className="image-fluid" src={dynamicImage(`avatar/9.jpg`)} alt="user vector" />
                <Link className="edit-icon" to="/app/users/profile">
                  <div className="icon">
                    <SvgIcon iconId="edit-2" className='feather stroke-primary' />
                  </div>
                </Link>
              </div>
              <span className="font-light d-block">Your Balance</span>
              <H4 className="mt-1">$768,987.90</H4>
              <UL className='simple-list flex-row'>
                {balanceData.map(({ title, text, data, icon, color }, index) => (
                  <LI key={index}>
                    <div className={`balance-item`}>
                      <div className={`balance-icon-wrap bg-light-${color}`}>
                        <div className={`balance-icon bg-${color}`}>
                          <div className='icon'>
                            <SvgIcon iconId={icon} className='feather' />
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="f-12 font-light">{title}</span>
                        <H5>{text}</H5>
                        <Badges color={`light-${color}`} className={`rounded-pill text-${color}`}>{data}</Badges>
                      </div>
                    </div>
                  </LI>
                ))}
              </UL>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Modal>
  )
}

export default BalanceModal