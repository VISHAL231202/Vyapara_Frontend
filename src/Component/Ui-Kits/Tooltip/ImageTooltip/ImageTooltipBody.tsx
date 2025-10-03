import { useState } from "react";
import { Image, LI } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { UncontrolledTooltip } from "reactstrap";

const ImageTooltipBody = ({item,i}:any) => {
    const [tooltip, setTooltip] = useState<boolean>(false);
    const toggle = () => setTooltip(!tooltip);
  return (
    <LI key={i}>
      <Image src={dynamicImage(`social/${item.image}`)} alt="social" id={item.id} />
      <UncontrolledTooltip target={item.id} trigger="click" placement="top" isOpen={tooltip} toggle={toggle} >
        {item.title}
      </UncontrolledTooltip>
    </LI>
  );
};

export default ImageTooltipBody;
