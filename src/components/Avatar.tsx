import { Avatar as MantineAvatar, Center } from "@mantine/core";
import { useAuthUser } from "react-auth-kit";

type AvatarProps = {
  size: string;
  mb?: string;
};

const Avatar = (props: AvatarProps) => {
  const userData = useAuthUser();
  return (
    <Center>
      <MantineAvatar
        src={`https://api.dicebear.com/6.x/thumbs/svg?seed=${
          userData()?.name
        }&radius=50&scale=75`}
        size={props.size}
        mb={props.mb}
        radius="xl"
      />
    </Center>
  );
};

export default Avatar;
