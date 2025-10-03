import { CardFooter } from 'reactstrap'
import { Btn } from '../../../../../AbstractElements'
import { Cancel, Submit } from '../../../../../utils/Constant'
import { CommonCardFooterProp } from '../../../../../Type/Forms/FormControls/FormsControls'

const CommonCardFooter:React.FC<CommonCardFooterProp> = ({ footerClass, color1, btn2Class, btn1Class, color2 }) => {
  return (
    <CardFooter className={footerClass}>
      <Btn color={color1} className={`m-r-15 ${btn1Class}`}>{Submit}</Btn>
      <Btn color={color2} className={color2} type="reset">{Cancel}</Btn>
    </CardFooter>
  )
}

export default CommonCardFooter