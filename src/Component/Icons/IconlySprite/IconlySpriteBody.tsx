import { Card, Col } from "reactstrap";
import { H6, SVG } from "../../../AbstractElements";
import { iconlySpriteData } from "../../../Data/Icons/IconlySprite";
import { IconsCommonProps4 } from "../../../Type/Icons/IconsTypes";

const IconlySpriteBody:React.FC<IconsCommonProps4>= ({parentCallback}) => {
    const getITag = (tag: string) => {
        parentCallback(tag);
    };
  return (
    <>
      {iconlySpriteData.map((item, i) => (
        <Col xxl="2" lg="3" sm="4" key={i}  onClick={() => getITag(item)}>
          <Card className="d-flex align-items-center flex-column default-border">
            <SVG className="svg-menu" iconId={item} />
            <div className="flex-grow-1">
              <H6>{item}</H6>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default IconlySpriteBody;
