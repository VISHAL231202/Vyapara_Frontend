import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from 'react-router-dom';
import { Href } from '../../../../utils/Constant';
import { dynamicImage } from '../../../../Service';
import { galleryGridImages } from '../../../../Data/Miscellaneous/Gallery/Gallery';

const MyGallery = () => {
  return (
    <Gallery>
      {galleryGridImages.map((item, index) => (
        <figure className="pswp-gallery col-xl-3 col-md-4 col-6" key={index}>
          <Item original={dynamicImage(`${item}`)} height="448" width="336">
            {({ ref, open }) => (
              <Link to={Href} onClick={open}>
                <img className="img-thumbnail" ref={ref} src={dynamicImage(`${item}`)} alt="" />
              </Link>
            )}
          </Item>
        </figure>
      ))}
    </Gallery>
  )
}

export default MyGallery