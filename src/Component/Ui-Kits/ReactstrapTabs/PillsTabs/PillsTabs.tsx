import { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import {AboutUs,Blog,ContactUs,Href,PillsTab} from "../../../../utils/Constant";
import { pillsTabData } from "../../../../Data/Ui-Kits/BootstrapTabs/BootstrapTabs";
import PillsTabContent from "./PillsTabContent";
import CardHeaderCommon from "../../CardHeaderCommon";

const PillsTabs = () => {
  const [basicTab, setBasicTab] = useState<string>("3");
  return (
    <Col lg="6">
      <Card>
        <CardHeaderCommon title={PillsTab} span={pillsTabData} headClass="pb-0"/>
        <CardBody>
          <Nav pills className="nav-primary">
            <NavItem>
              <NavLink
                href={Href}
                className={basicTab === "1" ? "active" : ""}
                onClick={() => setBasicTab("1")}
              >
                {AboutUs}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={Href}
                className={basicTab === "2" ? "active" : ""}
                onClick={() => setBasicTab("2")}
              >
                {ContactUs}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={Href}
                className={basicTab === "3" ? "active" : ""}
                onClick={() => setBasicTab("3")}
              >
                {Blog}
              </NavLink>
            </NavItem>
          </Nav>
          <PillsTabContent basicTab={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillsTabs;
