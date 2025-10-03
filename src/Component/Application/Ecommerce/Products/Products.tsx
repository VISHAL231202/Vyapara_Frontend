import { useEffect } from 'react';
import { Container } from 'reactstrap';
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { productsData } from '../../../../Data/Application/Ecommerce/Product';
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { setProductItem } from '../../../../ReduxToolkit/Reducers/ProductSlice';
import { Ecommerce, Product } from '../../../../utils/Constant';
import ProductFeatures from './ProductFeatures/ProductFeatures';
import ProductGrid from './ProductGrid/ProductGrid';

const ProductsContainer = () => {
  const { sideBarOn } = useAppSelector((state) => state.filterData);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(setProductItem(productsData));
  }, [dispatch]);
  return (
    <>
      <Breadcrumbs mainTitle={Product} parent={Ecommerce} />
      <Container fluid className={`product-wrapper ${sideBarOn ? "sidebaron" : ""}`}>
        <div className="product-grid">
          <ProductFeatures />
          <ProductGrid />
        </div>
      </Container>
    </>
  )
}

export default ProductsContainer