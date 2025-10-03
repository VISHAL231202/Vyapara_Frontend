import { Form, FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap";
import { FlatStyle, JointAddon, LeftAddon, LeftAddonPlaceholder, LeftAndRight, LeftAndRightAddon, RaiseStyle, RightAddon, RightAddonPlaceholder, SolidStyle } from "../../../../../utils/Constant";

const VariationAddonsFormContent = () => {
  return (
    <Form className="theme-form row g-3">
      <FormGroup>
        <Label>{LeftAddon}</Label>
        <InputGroup>
          <InputGroupText className="list-light-primary">
            <i className="icofont icofont-pencil-alt-5 font-primary"></i>
          </InputGroupText>
          <Input type="text" placeholder={LeftAddonPlaceholder} />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Label>{RightAddon}</Label>
        <InputGroup>
          <Input type="text" placeholder={RightAddonPlaceholder} />
          <InputGroupText className="list-light-danger">
            <i className="icofont icofont-ui-dial-phone font-danger"></i>
          </InputGroupText>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Label>{JointAddon}</Label>
        <InputGroup>
          <InputGroupText className="list-light-primary">
            <i className="icofont icofont-broken font-primary"></i>
          </InputGroupText>
          <InputGroupText>{"0.00"}</InputGroupText>
          <Input type="text" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Label>{LeftAndRightAddon}</Label>
        <InputGroup className="mb-3">
          <InputGroupText className="list-light-danger">
            <i className="icofont icofont-ui-zoom-out font-danger"></i>
          </InputGroupText>
          <Input type="text" />
          <InputGroupText className="list-light-danger">
            <i className="icofont icofont-ui-zoom-in font-danger"></i>
          </InputGroupText>
        </InputGroup>
      </FormGroup>
      <FormGroup className="input-group-solid">
        <Label>{SolidStyle}</Label>
        <InputGroup>
          <InputGroupText className="list-light-primary">
            <i className="icofont icofont-users font-primary"></i>
          </InputGroupText>
          <Input type="text" placeholder="999999" />
        </InputGroup>
      </FormGroup>
      <FormGroup className="input-group-square">
        <Label>{FlatStyle}</Label>
        <InputGroup>
          <InputGroupText className="list-light-danger">
            <i className="icofont icofont-credit-card font-danger"></i>
          </InputGroupText>
          <Input type="text" placeholder="" />
        </InputGroup>
      </FormGroup>
      <FormGroup className="input-group-square">
        <Label>{RaiseStyle}</Label>
        <InputGroup>
          <InputGroupText className="list-light-primary">
            <i className="icofont icofont-download font-primary"></i>
          </InputGroupText>
          <Input className="input-group-air" type="text" placeholder="https://www.example.com" />
        </InputGroup>
      </FormGroup>
      <FormGroup className="input-group-square">
        <Label>{LeftAndRight}</Label>
        <InputGroup className="pill-input-group">
          <InputGroupText className="list-light-danger">
            <i className="icofont icofont-ui-copy font-danger"></i>
          </InputGroupText>
          <Input type="text" />
          <InputGroupText className="list-light-danger">
            <i className="icofont icofont-stock-search font-danger"></i>
          </InputGroupText>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default VariationAddonsFormContent;
