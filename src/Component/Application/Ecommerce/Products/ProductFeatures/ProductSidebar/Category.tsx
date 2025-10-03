import { H6 } from '../../../../../../AbstractElements'
import { CategoryHeading, Price } from '../../../../../../utils/Constant'
import BrandFilter from './BrandFilter'
import ColorsFilter from './ColorsFilter'
import GenderFilter from './GenderFilter'
import RangeSlider from './RangeSlider'

const Category = () => {
  return (
    <>
      <div className="product-filter">
        <H6 className="f-w-600">{CategoryHeading}</H6>
        <GenderFilter />
      </div>
      <BrandFilter />
      <ColorsFilter />
      <div className="product-filter mb-5">
        <H6 className="f-w-600">{Price}</H6>
        <RangeSlider />
      </div>
    </>
  )
}

export default Category