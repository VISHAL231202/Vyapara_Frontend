import { Gallery, Item } from "react-photoswipe-gallery";
import { CardBody } from "reactstrap";
import { H4, LI, P } from "../../../../AbstractElements";
import { Href, PortfolioTitle } from "../../../../utils/Constant";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import { dynamicImage } from "../../../../Service";
import { masonryImageData } from "../../../../Data/Miscellaneous/Gallery/Gallery";

const MasonryGalleryWithDescCardBody = () => {
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1,
  };

  return (
    <CardBody>
      <Gallery>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="row grid gallery-with-description mb-0"
          columnClassName="grid-item col-xl-3 col-sm-6"
        >
          {masonryImageData.map((element, index) => (
            <LI style={{ listStyle: "none" }} key={index} className="p-0">
              <figure itemProp="caption description">
                <Item
                  original={dynamicImage(element.src)}
                  caption="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
                  width="700"
                  height="850"
                >
                  {({ ref, open }) => (
                    <Link to={Href} onClick={open}>
                      <img
                        className="img-thumbnail"
                        ref={ref}
                        src={dynamicImage(element.src)}
                        alt="images"
                      />
                      <div className="caption">
                        <H4>{PortfolioTitle}</H4>
                        <P>
                          is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard
                          dummy.
                        </P>
                      </div>
                    </Link>
                  )}
                </Item>
              </figure>
            </LI>
          ))}
        </Masonry>
      </Gallery>
    </CardBody>
  );
};

export default MasonryGalleryWithDescCardBody;
