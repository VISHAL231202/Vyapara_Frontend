import { useRef } from "react";
import { Printer } from "react-feather";
import { useReactToPrint } from "react-to-print";
import { Card, CardHeader } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import { CreatedByMeHeading, Href, Print } from "../../../../utils/Constant";
import CreatedByMe from "./CreatedByMe";

const ListOfTask = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <H5 className="mb-0">{CreatedByMeHeading}</H5>
        <a href={Href} onClick={handlePrint} className="f-w-600 font-primary"><Printer className="me-2"/>{Print}</a>
      </CardHeader>
      <CreatedByMe ref={componentRef}/>
    </Card>
  );
};

export default ListOfTask;
