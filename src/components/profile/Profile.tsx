import { useNavigate, useParams } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";
import { Tabs } from "@mantine/core";

const Profile = () => {
  const navigate = useNavigate();
  const { tabValue } = useParams();
  return (
    <Tabs
      value={tabValue}
      onTabChange={(value) => navigate(`/profile/${value}`)}
    >
      <Tabs.List position="center">
        <Tabs.Tab value="edit">Edit Profile</Tabs.Tab>
        <Tabs.Tab value="change-password">Change Password</Tabs.Tab>
      </Tabs.List>

      <EditProfile />
      <ChangePassword />
    </Tabs>
  );
};

export default Profile;
