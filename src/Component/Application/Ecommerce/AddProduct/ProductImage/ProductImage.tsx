import { Card, CardBody, Form } from "reactstrap";
import { H4, H6 } from "../../../../../AbstractElements";
import { BlogDropFilesHereOrClickToUpload, ProductImageHeading } from "../../../../../utils/Constant";
import SelectSize from "./SelectSize";
import Dropzone, { IDropzoneProps } from "react-dropzone-uploader";
import { toast } from "react-toastify";

const ProductImage = () => {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };
  
  const handleSubmit: IDropzoneProps['onSubmit'] = (allFiles) => {
    allFiles.forEach(f => f.remove())
    toast.success("Dropzone successfully submitted !");
  };
  
  const Data = () => {
    return (
      <div>
        <i className="icon-cloud-up font-primary"></i>
        <H6>{BlogDropFilesHereOrClickToUpload}</H6>
        <span className="fs-6">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
      </div>
    );
  };
  return (
    <Card>
      <CardBody>
        <div className="product-info">
          <H4>{ProductImageHeading}</H4>
          <Form>
            <Dropzone getUploadParams={getUploadParams} onSubmit={handleSubmit} maxFiles={1} inputContent={<Data />} />
          </Form>
          <SelectSize />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductImage;
