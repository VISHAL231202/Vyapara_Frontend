import { Fragment, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Col, Form, FormGroup, Input, Label, Modal, ModalBody, Row } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setAllTasks, setValidation } from "../../../../ReduxToolkit/Reducers/TasksSlice";
import { FormDataTypes } from "../../../../Type/Application/Tasks/Tasks";
import { AddNewTask, Cancel, NewTask, Save, SubTask, TaskTitle } from "../../../../utils/Constant";
import { TaskRadioRow } from "./TaskRadioRow";

const NewTaskClass = () => {
  const { allTasks, validation } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [addModal, setAddModal] = useState(false);
  const addToggle = () => {
    setAddModal(!addModal);
    reset({
      description: "",
      title: "",
      sunTitle:""
    });
  };

  const addTask: SubmitHandler<FormDataTypes> = (data) => {
    if (data.description !== "" && data.title !== "") {
      const taskTemp = {
        id: allTasks.length + 1,
        title: data.title,
        collection: "General",
        description: data.description,
      };
      dispatch(setAllTasks([...allTasks, taskTemp]));
      dispatch(setValidation(false));
      setAddModal(false);
      reset({
        description: "",
        title: "",
        sunTitle:""
      });
    }
  };
  return (
    <Fragment>
      <Btn block color="light-primary" className="btn-mail w-100" onClick={addToggle}>
        <SvgIcon iconId="check-circle" className="feather me-2" /> {NewTask}
      </Btn>
      <Modal isOpen={addModal} toggle={addToggle} size="lg">
        <div className="modal-header">
          <h5 className="modal-title">{AddNewTask}</h5>
          <Btn close color="transprant" onClick={addToggle} />
        </div>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(addTask)}>
            <Row>
              <Col md="12" className="mt-0">
                <FormGroup>
                  <Label check>{TaskTitle}</Label>
                  <input type="text" className={`form-control ${validation && `${errors.title ? "is-invalid" : "is-valid"}`}`} {...register("title", { required: true })} />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup className="mt-0">
                  <Label>{SubTask}</Label>
                  <input type="text" className={`form-control ${validation && `${errors.sunTitle ? "is-invalid" : "is-valid"}`}`} {...register("sunTitle", { required: true })} />
                </FormGroup>
              </Col>
              <TaskRadioRow />
              <Col md="6" className="mt-0">
                <FormGroup>
                  <Input type="select" className="form-control js-example-basic-single">
                    <option value="My Task">My Task</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6" className="mt-0">
                <FormGroup>
                  <select className={`js-example-disabled-results form-control form-select js-example-basic-single`}>
                    <option value="General">General</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md="12" className="my-0">
                <FormGroup>
                  <textarea className={`form-control ${validation && `${errors.description ? "is-invalid" : "is-valid"}`}`} {...register("description", { required: true })} />
                </FormGroup>
              </Col>
            </Row>
            <Btn color="secondary" className="me-1" type="submit" onClick={() => dispatch(setValidation(true))}>
              {Save}
            </Btn>
            <Btn color="primary" onClick={addToggle}>
              {Cancel}
            </Btn>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default NewTaskClass;
