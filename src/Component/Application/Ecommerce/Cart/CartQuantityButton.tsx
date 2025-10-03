import { useAppDispatch } from '../../../../ReduxToolkit/Hooks';
import { CartQuantityButtonProp, CartType } from '../../../../Type/Application/Ecommerce/Product';
import { Input } from 'reactstrap';
import { decrementData, incrementData } from '../../../../ReduxToolkit/Reducers/CartSlice';

const CartQuantityButton = ({ item }: CartQuantityButtonProp) => {
  const dispatch = useAppDispatch();
  const incrementQty = (product: CartType, quantity: number) => dispatch(incrementData({ item: product, quantity: quantity }));
  const decrementQuantity = (id: number) => dispatch(decrementData(id));
  return (
    <td>
        <div className="touchspin-wrapper">
          <button className="decrement-touchspin btn-touchspin touchspin-primary" onClick={() => decrementQuantity(item.id)} >
            <i className="fa fa-minus"></i>
          </button >
          <Input className="input-touchspin spin-outline-primary" type="number" value={item.total}/>
          <button  className="increment-touchspin btn-touchspin touchspin-primary" onClick={() => incrementQty(item, 1)} >
            <i className="fa fa-plus"></i>
          </button>
        </div>
    </td>
  );
}

export default CartQuantityButton