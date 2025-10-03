import { Link } from 'react-router-dom'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { CommonFormPropsType } from '../../../../Type/OtherPages/OtherPages'

const CommonLogo = ({ alignLogo }: CommonFormPropsType) => {
  return (
    <Link className={`logo ${alignLogo ? alignLogo :""}`} to={`${process.env.PUBLIC_URL}/dashboard/default`}>
      <Image
        className="img-fluid for-light"
        src={dynamicImage("logo/logo.png")}
        alt="loginpage"
      />
      <Image
        className="for-dark m-auto"
        src={dynamicImage("logo/dark-logo.png")}
        alt="loginpage"
      />
    </Link>
  )
}

export default CommonLogo