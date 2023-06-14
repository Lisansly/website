import { useNavigate, useParams } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";
import { Tabs } from "@mantine/core";
import { useEffect } from "react";

const Profile = () => {
  const { tabValue } = useParams();
  const navigate = useNavigate();

  const tabs = [
    {
      component: <EditProfile />,
      path: "edit",
    },
    {
      component: <ChangePassword />,
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
      <Tabs.List position="center">
        <Tabs.Tab value="edit">Edit Profile</Tabs.Tab>
        <Tabs.Tab value="change-password">Change Password</Tabs.Tab>
      </Tabs.List>

      {tabs.find((tab) => tab.path === tabValue)?.component}
    </Tabs>
  );
};

export default Profile;
