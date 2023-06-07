import ChangePassword from "./ChangePassword";
import EditProfile from "./EditProfile";
import { Tabs } from "@mantine/core";

const Profile = () => {
  return (
    <Tabs defaultValue="editProfile">
      <Tabs.List position="center">
        <Tabs.Tab value="editProfile">Edit Profile</Tabs.Tab>
        <Tabs.Tab value="changePassword">Change Password</Tabs.Tab>
      </Tabs.List>

      <EditProfile />
      <ChangePassword />
    </Tabs>
  );
};

export default Profile;
