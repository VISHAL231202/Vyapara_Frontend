/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { chatApi, chatMemberApi } from "../../../../Api";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { setAllMembers, setChats } from "../../../../ReduxToolkit/Reducers/ChatSlice";
import { Chat, GroupChat } from "../../../../utils/Constant";
import LeftSidebar from "../PrivateChat/LeftSidebar/LeftSidebar";
import UserGroupChat from "./UserGroupChat/UserGroupChat";

const GroupChatContainer = () => {
  const dispatch = useAppDispatch();
  const getChatMembersData = async () => {
    try {
      await axios.get(chatMemberApi).then((resp) => {
        dispatch(setAllMembers(resp.data));
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const getChatData = async () => {
    try {
      await axios.get(chatApi).then((resp) => {
        dispatch(setChats(resp.data));
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getChatData();
    getChatMembersData();
  }, []);
  return (
    <>
      <Breadcrumbs mainTitle={GroupChat} parent={Chat} />
      <Container fluid>
        <Row className="g-0">
          <LeftSidebar />
          <UserGroupChat />
        </Row>
      </Container>
    </>
  );
};

export default GroupChatContainer;
