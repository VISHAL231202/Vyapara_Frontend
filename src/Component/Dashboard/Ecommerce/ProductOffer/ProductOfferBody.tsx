import { Href } from "../../../../utils/Constant";
import { H4, H5, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const ProductOfferBody = () => {
  return (
    <div className="swiper mySwiper">
      <div className="swiper-wrapper">
        <Swiper pagination={{ dynamicBullets: true}} modules={[Pagination]} className="mySwiper" autoplay >
          <SwiperSlide >
            <div className="item text-center">
              <Image className="img-fluid" src={dynamicImage(`dashboard2/headphone.png`)} alt="headphone"/>
              <Image className="product-gif img-fluid" src={dynamicImage(`gif/new.gif`)} alt="gif" />
              <div className="product-content">
                <H4>
                  <Link className="f-18" to={Href}>
                    Wireless Apple Airpods
                  </Link>
                </H4>
                <H5 className="font-primary f-w-600 f-16 mt-1">$130.00</H5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="item text-center">
              <Image className="img-fluid" src={dynamicImage(`dashboard2/9.png`)} alt="headphone" />
              <Image className="product-gif img-fluid" src={dynamicImage(`gif/new.gif`)} alt="gif" />
              <div className="product-content">
                <H4>
                  <Link className="f-18" to={Href}> Wireless Apple Airpods </Link>
                </H4>
                <H5 className="font-primary f-w-600 f-16 mt-1">$130.00</H5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="item text-center">
              <Image className="img-fluid" src={dynamicImage(`dashboard2/7.png`)} alt="headphone" />
              <Image className="product-gif img-fluid" src={dynamicImage(`gif/new.gif`)} alt="gif" />
              <div className="product-content">
                <H4>
                  <Link className="f-18" to={Href}> Wireless Apple Airpods</Link>
                </H4>
                <H5 className="font-primary f-w-600 f-16 mt-1">$130.00</H5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductOfferBody;
