import { Link } from 'react-router-dom';
import { Row, Table } from 'reactstrap';
import { Image } from '../../../../AbstractElements';
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon';
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { removeCartData } from '../../../../ReduxToolkit/Reducers/CartSlice';
import { dynamicImage } from '../../../../Service';
import { CartType } from '../../../../Type/Application/Ecommerce/Product';
import { Href } from '../../../../utils/Constant';
import CartAction from './CartAction';
import CartQuantityButton from './CartQuantityButton';
import CartTableHead from './CartTableHead';
import EmptyCart from './EmptyCart';

const CartData = () => {
  const dispatch = useAppDispatch();
  const { symbol } = useAppSelector((state) => state.product);
  const { cart } = useAppSelector((state) => state.cartData);
  const removeFromCart = (item: CartType) => dispatch(removeCartData(item.id));

  return (
    <>
      {cart && cart.length > 0 ? (
        <Row>
          <div className="order-history wishlist">
            <Table bordered responsive>
              <CartTableHead />
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Image className="img-fluid img-40" src={dynamicImage(`ecommerce/${item.image}`)} alt="product" />
                    </td>
                    <td>
                      <div className="product-name">
                        <Link to={`${process.env.PUBLIC_URL}/ecommerce/productpage`}>{item.name}</Link>
                      </div>
                    </td>
                    <td>{symbol}{item.price}</td>
                    <CartQuantityButton item={item} />
                    <td>
                      <Link to={Href} onClick={() => removeFromCart(item)}><SvgIcon className='feather stroke-danger' iconId='x-circle' /></Link>
                    </td>
                    <td>{symbol}{item.price * item.total}</td>
                  </tr>
                ))}
                <CartAction/>
              </tbody>
            </Table>
          </div>
        </Row>
      ) : (
        <EmptyCart />
      )}
    </>
  )
}

export default CartData