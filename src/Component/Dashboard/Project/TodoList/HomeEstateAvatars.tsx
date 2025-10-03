import { Image, LI, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { HomeEstateAvatarsProps } from "../../../../Type/Dashboard/ProjectType";

const HomeEstateAvatars = ({data}:HomeEstateAvatarsProps) => {
  return (
    <div className="customer d-inline-block avatar-group text-end">
      <UL className="flex-row justify-content-end">
        <LI className="d-inline-block p-0">
          <Image className="img-40 b-r-10" src={dynamicImage(data.imageOne)} alt="user"/>
        </LI>
        <LI className="d-inline-block p-0">
          <Image className="img-40 b-r-10" src={dynamicImage(data.imageTwo)}alt="user"/>
        </LI>
        <LI className="d-inline-block p-0">
          <span className="b-r-10">+{data.number}</span>
        </LI>
      </UL>
    </div>
  );
};

export default HomeEstateAvatars;
