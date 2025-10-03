import { H6 } from '../../../../../../AbstractElements'
import { NewProducts } from '../../../../../../utils/Constant'
import CommonProductSlide from '../Common/CommonProductSlide';
import { productSlideData } from '../../../../../../Data/Application/Ecommerce/Product';
import { Carousel } from 'react-responsive-carousel';
import { Fragment } from 'react';

const PriceRange = () => {
  return (
    <div className="product-filter pb-0 new-products">
      <H6 className="f-w-600">{NewProducts}</H6>
      <div className="owl-carousel owl-theme" id="testimonial">
        <Carousel showIndicators={false} showStatus={false} autoPlay infiniteLoop showThumbs={false}>
          {productSlideData.map((data,i)=>(
            <Fragment key={i}>
             {data.newProduct.map((item,i)=>(
                <CommonProductSlide data={item} key={i} />
              ))}
            </Fragment>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default PriceRange