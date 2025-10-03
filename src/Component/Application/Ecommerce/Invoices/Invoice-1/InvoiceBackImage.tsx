import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";

const InvoiceBackImage = () => {
  return (
    <td className="p-0">
      <Image className="banner-image w-100" src={dynamicImage("email-template/invoice-1/1.png")} alt="background"/>
    </td>
  );
};

export default InvoiceBackImage;
