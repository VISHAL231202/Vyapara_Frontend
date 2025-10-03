import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Buttons } from "../../utils/Constant";
import ButtonsStyle from "./ButtonsStyle/ButtonsStyle";
import ButtonsSize from "./ButtonsSize/ButtonsSize";
import ButtonsDescription from "./ButtonsDescription/ButtonsDescription";

const ButtonsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Buttons} parent={Buttons} />
      <Container fluid>
        <Row className="buttons-tab">
          <ButtonsStyle />
          <ButtonsSize />
          <ButtonsDescription />
        </Row>
      </Container>
    </>
  );
};

export default ButtonsContainer;
