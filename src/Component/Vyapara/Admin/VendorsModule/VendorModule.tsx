import React, { useState } from "react";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  Card,
  CardBody,
  Col,
  Container,
  FormGroup,
  Label,
  Row,
} from "reactstrap";
import { VendorManagement } from "../../../../utils/Constant";
import VendorsTab from "./VendorsTable/VendorsTab";
import { Link } from "react-router-dom";
import { Btn } from "../../../../AbstractElements";
import { Field, FieldProps, Form, Formik } from "formik";

function VendorModule() {
  // ✅ NEW: State to store the selected filter
  const [selectedStatus, setSelectedStatus] = useState<number>(0);

  const filterOptions = [
    { id: 0, label: "All Locations" },
    { id: 1, label: "Mumbai" },
    { id: 2, label: "Delhi" },
    { id: 3, label: "Hyderabad" },
    { id: 4, label: "Kolkata" },
  ];

  const handleScheduleListForm = (values: any) => {
    console.log("Selected Filter:", values.scheduling_list_id);
    // ✅ Update the local state when form changes
    setSelectedStatus(values.scheduling_list_id);
  };
  return (
    <>
      <Breadcrumbs mainTitle={VendorManagement} parent={VendorManagement} />
      <Container fluid>
        <Card>
          <CardBody>
            <Row>
              <Col md="6" className="mt-3 mb-4">
                <Formik
                  initialValues={{ scheduling_list_id: 0 }}
                  onSubmit={handleScheduleListForm}
                >
                  {({ setFieldValue, values }) => (
                    <Form className="theme-form">
                      <Row className="g-2">
                        <Col md="12">
                          <FormGroup>
                            <Label check>Filter By Location</Label>
                            <Field name="scheduling_list_id">
                              {({ field }: FieldProps) => (
                                <select
                                  {...field}
                                  className="form-control"
                                  onChange={(e) => {
                                    const selected = Number(e.target.value);
                                    setFieldValue(field.name, selected);
                                    setSelectedStatus(selected);
                                  }}
                                >
                                  {filterOptions.map((option) => (
                                    <option key={option.id} value={option.id}>
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              )}
                            </Field>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </Col>
              <Col
                sm="6"
                className="mt-3 mb-4"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {" "}
                <Link to={""}>
                  <Btn color="primary">
                    <i
                      className="fa fa-plus-circle"
                      style={{ marginRight: "6px" }}
                    />
                    Add New Vendor
                  </Btn>
                </Link>
              </Col>

              <Col sm="12">
                <VendorsTab selectedStatus={selectedStatus} />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default VendorModule;
