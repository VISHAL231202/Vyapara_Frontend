import React from "react";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { UserManagement } from "../../../../utils/Constant";
import { Card, CardBody, Col, Container } from "reactstrap";
import UsersTab from "./UsersTable/UsersTab";

function UserModule() {
  return (
    <>
      <Breadcrumbs mainTitle={UserManagement} parent={UserManagement} />
      <Container fluid>
        <Card>
          <CardBody>
            <Col sm="12">
              <UsersTab />
            </Col>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default UserModule;
