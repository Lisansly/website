import { useNavigate, useParams } from "react-router-dom";
import UserClient from "../../clients/user/Client";
import { useDocumentTitle } from "@mantine/hooks";
import ChangePassword from "./ChangePassword";
import { useAuthUser, useSignIn } from "react-auth-kit";
import Notification from "../Notification";
import EditProfile from "./EditProfile";
import { Tabs } from "@mantine/core";
import { useEffect } from "react";
import Details from "./Details";

type TabProps = {
  path: string;
  component: JSX.Element;
  text: string;
};

const Profile = () => {
  useDocumentTitle("Profile | Lisansly");

  const notification = new Notification();
  const userClient = new UserClient();
  const { tabValue } = useParams();
  const userData = useAuthUser();
  const navigate = useNavigate();
  const signIn = useSignIn();

  const tabs: TabProps[] = [
    {
      component: <Details userData={userData} navigate={navigate} />,
      path: "details",
      text: "Profile",
    },
    {
      component: (
        <EditProfile
          notification={notification}
          userClient={userClient}
          userData={userData}
          signIn={signIn}
        />
      ),
      path: "edit",
      text: "Edit",
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
      text: "Change Password",
    },
  ];

  useEffect(() => {
    if (!tabs.some((tab) => tab.path === tabValue)) {
      navigate("/profile/details");
    }
  }, [tabValue]);

  return (
    <Tabs
      onTabChange={(value) => navigate(`/profile/${value}`)}
      value={tabValue}
      mih="100vh"
    >
      <Tabs.List position="center" mb={"xl"}>
        {tabs.map((tab) => (
          <Tabs.Tab value={tab.path} key={tab.path}>
            {tab.text}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabs.find((tab) => tab.path === tabValue)?.component}
    </Tabs>
  );
};

export default Profile;
