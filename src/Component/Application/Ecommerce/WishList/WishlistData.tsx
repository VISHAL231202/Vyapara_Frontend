import { Col, Row } from 'reactstrap'
import { Btn, H6, Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { MoveToCarts } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'
import CommonRating from '../CommonRating/CommonRating'
import { whishListProduct } from '../../../../Data/Application/Ecommerce/WhishList'

const WishlistData = () => {
  return (
    <Row>
      {whishListProduct.map((item, index) => (
        <Col xl="2" md="4" sm="6" lg="3" key={index}>
          <div className="prooduct-details-box">
            <div className="d-block">
              <Link to={`${process.env.PUBLIC_URL}/ecommerce/productpage`}>
                <Image className="align-self-center img-fluid" src={dynamicImage(`ecommerce/${item.image}`)} alt="#" />
              </Link>
              <div className="flex-grow-1">
                <div className="product-name">
                  <Link to={`${process.env.PUBLIC_URL}/ecommerce/productpage`}>
                    <H6>{item.name}</H6>
                  </Link>
                </div>
                <CommonRating />
                <div className="price">Price
                  <span>: 210$</span> 
                </div>
                <div className="avaiabilty">
                  <div className="font-success">InStock</div>
                </div>
                <div>
                  <Btn color="primary" size="xs">{MoveToCarts}</Btn>
                </div>
              </div>
            </div>
          </div>
        </Col>
       ))} 
    </Row>
  )
}

export default WishlistData