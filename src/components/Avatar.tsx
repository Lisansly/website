import { Avatar as MantineAvatar, Center } from "@mantine/core";

type AvatarProps = {
  name: string;
  size: string;
  mb?: string;
};

const Avatar = (props: AvatarProps) => {
  return (
    <Center>
      <MantineAvatar
        src={`https://api.dicebear.com/6.x/thumbs/svg?seed=${props.name}&radius=50&scale=75`}
        size={props.size}
        mb={props.mb}
        radius="xl"
      />
    </Center>
  );
};

export default Avatar;
