import { Image, LI, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const DynamicGroupingWithCounter = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <UL className="d-flex flex-row">
        <LI className="d-inline-block">
          <Image className="img-40 b-r-30" src={dynamicImage(`avatar/4.jpg`)} alt="#"/>
        </LI>
        <LI className="d-inline-block">
          <Image className="img-40 b-r-30" src={dynamicImage(`avatar/5.jpg`)} alt="#" />
        </LI>
        <LI className="d-inline-block">
          <Image className="img-40 b-r-30" src={dynamicImage(`avatar/8.jpg`)}alt="#"/>
        </LI>
        <LI className="d-inline-block">
          <span className="b-r-30">+2</span>
        </LI>
      </UL>
    </div>
  );
};

export default DynamicGroupingWithCounter;
