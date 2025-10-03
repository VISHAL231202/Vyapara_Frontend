import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../../ReduxToolkit/Hooks'
import { H4, P } from '../../../../../AbstractElements'
import { ProductDetailsProp } from '../../../../../Type/Application/Ecommerce/Product'
import { starData } from '../../../../../Data/Application/Ecommerce/Product'

const ProductDetails = ({ item }: ProductDetailsProp) => {
  const {symbol}=useAppSelector((state)=>state.product)
  return (
    <div className="product-details">
      {starData}
      <Link to={`${process.env.PUBLIC_URL}/ecommerce/productpage`}>
        <H4>{item.name}</H4>
      </Link>
      <P>{item.note}</P>
      <div className="product-price">
        {symbol}{item.price} <del>{symbol}{item.discountPrice}</del>
      </div>
    </div>
  )
}

export default ProductDetails