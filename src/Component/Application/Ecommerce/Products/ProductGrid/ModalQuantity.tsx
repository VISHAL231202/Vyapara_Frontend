import { ChangeEvent } from 'react';
import { Input } from 'reactstrap';
import { H4 } from '../../../../../AbstractElements';
import { ModalQuantityProp } from '../../../../../Type/Application/Ecommerce/Product';
import { Quantity } from '../../../../../utils/Constant';

const ModalQuantity = ({ quantity, setQuantity }: ModalQuantityProp) => {
  const minusQty = () => quantity > 1 && setQuantity(quantity - 1);
  const plusQty = () => quantity >= 1 && setQuantity(quantity + 1);
  const changeQty = (e: ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value));

  return (
    <>
      <H4 className="f-w-600">{Quantity}</H4>
      <fieldset >
        <div className="touchspin-wrapper">
          <button className="decrement-touchspin btn-touchspin touchspin-primary" color='primary' onClick={minusQty}>
            <i className="fa fa-minus"></i>
          </button>
          <Input className="input-touchspin spin-outline-primary mx-2" type='number' name="quantity" value={quantity} onChange={(e) => changeQty(e)} />
          <button className="increment-touchspin btn-touchspin touchspin-primary" onClick={plusQty} color='primary'>
            <i className="fa fa-plus"></i>
          </button>
        </div>
        <br />
      </fieldset>
    </>
  )
}

export default ModalQuantity