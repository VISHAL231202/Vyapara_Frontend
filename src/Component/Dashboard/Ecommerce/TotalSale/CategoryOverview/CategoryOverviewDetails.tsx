import { H6, LI, UL } from "../../../../../AbstractElements";
import { categoryOverviewDetailsData } from "../../../../../Data/Dashboard/Ecommerce/Ecommerce";

const CategoryOverviewDetails = () => {
  return (
    <UL>
      {categoryOverviewDetailsData.map((item, i) => (
        <LI className="d-flex align-items-center bg-light card-hover" key={i}>
          <div className="flex-shrink-0">
            <div className={`circle-dot-${item.color}`}>
              <span />
            </div>
          </div>
          <div className="flex-grow-1">
            <H6 className="f-w-500">{item.category}</H6>
            <span className="f-13 font-light">{item.count} Products Sold</span>
          </div>
        </LI>
      ))}
    </UL>
  );
};

export default CategoryOverviewDetails;
