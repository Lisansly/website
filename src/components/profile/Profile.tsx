import { useNavigate, useParams } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";
import { Tabs } from "@mantine/core";
import { useEffect } from "react";
import UserClient from "../../clients/user/Client";
import { useSignIn } from "react-auth-kit";
import Notification from "../Notification";

const Profile = () => {
  const notification = new Notification();
  const userClient = new UserClient();
  const { tabValue } = useParams();
  const navigate = useNavigate();
  const signIn = useSignIn();
  const tabs = [
    {
      component: (
        <EditProfile
          notification={notification}
          userClient={userClient}
          signIn={signIn}
        />
      ),
      path: "edit",
    },
    {
      component: (
        <ChangePassword
          notification={notification}
          userClient={userClient}
          signIn={signIn}
        />
      ),
      path: "change-password",
    },
  ];

  useEffect(() => {
    if (!tabs.some((tab) => tab.path === tabValue)) {
      navigate("/profile/edit");
    }
  }, [tabValue]);

  return (
    <Tabs
      onTabChange={(value) => navigate(`/profile/${value}`)}
      value={tabValue}
      mih="100vh"
    >
      <Tabs.List position="center" mb={"xl"}>
        <Tabs.Tab value="edit">Edit Profile</Tabs.Tab>
        <Tabs.Tab value="change-password">Change Password</Tabs.Tab>
      </Tabs.List>

      {tabs.find((tab) => tab.path === tabValue)?.component}
    </Tabs>
  );
};

export default Profile;
