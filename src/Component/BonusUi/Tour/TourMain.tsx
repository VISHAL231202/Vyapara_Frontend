import { useTour } from '@reactour/tour';
import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { BonusUi, Tour } from "../../../utils/Constant";
import UserProfileFifthStyle from "./UserProfileFifthStyle/UserProfileFifthStyle";
import UserProfileFirstStyle from "./UserProfileFirstStyle/UserProfileFirstStyle";
import UserProfileFourthStyle from "./UserProfileFourthStyle/UserProfileFourthStyle";
import UserProfileSecondStyle from "./UserProfileSecondStyle/UserProfileSecondStyle";
import UserProfileThirdStyle from "./UserProfileThirdStyle/UserProfileThirdStyle";

const TourMain = () => {
  const { setIsOpen } = useTour();
  useEffect(() => {
    var timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [setIsOpen]);
  return (
    <>
      <Breadcrumbs mainTitle={Tour} parent={BonusUi} />
      <Container fluid className="user-profile">
        <Row>
          <UserProfileFirstStyle />
          <UserProfileSecondStyle />
          <UserProfileThirdStyle />
          <UserProfileFourthStyle />
          <UserProfileFifthStyle />
        </Row>
      </Container>
    </>
  );
};

export default TourMain;
