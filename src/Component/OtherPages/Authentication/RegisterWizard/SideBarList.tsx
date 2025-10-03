import { H4, H6, Image, LI, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import CommonLogo from '../Common/CommonLogo'
import { registerHorizontalData } from '../../../../Data/OtherPage/OtherPage'
import { PropsType } from '../../../../Type/OtherPages/OtherPages'

const SideBarList = ({ level }: PropsType) => {
  return (
    <UL className="anchor simple-list">
      <LI><CommonLogo /></LI>
      <LI>
        <div className="progresscont">
          <div className="circleblocks">
            <div className="user-profile">
              {registerHorizontalData.map((data, index) => (
                <div className={`${level === index + 1? "selected": level > index + 1? "done": "disabled"} ${data.class}`} key={index}>
                  <div className="circulo text-center">
                    {data.icon}
                  </div>
                  <div className="user-content">
                    <H4 className="font-primary">{data.tittle}</H4>
                    <H6>
                      {data.tittle === "Done" ? (<i className="fa fa-thumbs-o-up" />) : (" ")}
                    </H6>
                    <small>{data.detail}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LI>
      <LI>
        <Image src={dynamicImage("login/icon.png")} alt="loginpage" className='img-fluid w-100'/>
      </LI>
    </UL>
  )
}

export default SideBarList