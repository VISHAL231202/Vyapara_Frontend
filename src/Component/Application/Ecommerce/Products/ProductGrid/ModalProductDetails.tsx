import { useAppSelector } from '../../../../../ReduxToolkit/Hooks'
import { Btn, H4, LI, P, UL } from '../../../../../AbstractElements'
import { ProductDetails } from '../../../../../utils/Constant'
import { ModalProductDetailsProp } from '../../../../../Type/Application/Ecommerce/Product'
import { productSizeArray } from '../../../../../Data/Application/Ecommerce/Product'

const ModalProductDetails = ({ singleProduct }: ModalProductDetailsProp) => {
  const {symbol} = useAppSelector((state)=>state.product)
  return (
    <>
      <H4>{singleProduct.category}</H4>
      <div className="product-price">
        <span>{symbol}{singleProduct.price}</span>
        <del>{symbol}{singleProduct.discountPrice}</del>
      </div>
      <div className="product-view">
        <H4 className="f-w-600">{ProductDetails}</H4>
        <P className="mb-0">{singleProduct.description}</P>
      </div>
      <div className="product-size">
        <UL className="simple-list flex-row">
          {productSizeArray.map((items, i) => (
            <LI key={i} className='p-0'>
              <Btn>
                {items}
              </Btn>
            </LI>
          ))}
        </UL>
      </div>
    </>
  )
}

export default ModalProductDetails