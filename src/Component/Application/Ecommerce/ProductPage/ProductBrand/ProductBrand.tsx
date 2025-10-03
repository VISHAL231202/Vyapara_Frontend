import { Card, CardBody } from 'reactstrap'
import { H4, LI, UL } from '../../../../../AbstractElements'
import { Brand } from '../../../../../utils/Constant'
import { brandDetailsData } from '../../../../../Data/Application/Ecommerce/ProductPage'

const ProductBrand = () => {
  return (
    <Card>
      <CardBody>
        <div className="filter-block">
          <H4>{Brand}</H4>
          <UL className="simple-list">
            {brandDetailsData.map((data,i)=>(
              <LI key={i}>{data}</LI>
            ))}
          </UL>
        </div>
      </CardBody>
    </Card>
  )
}

export default ProductBrand