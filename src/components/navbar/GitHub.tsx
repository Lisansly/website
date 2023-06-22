import { IconBrandGithub } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";

const Github = () => {
  return (
    <ActionIcon
      href="https://github.com/Lisansly"
      variant="subtle"
      target="_blank"
      component="a"
      radius="md"
      ml={"auto"}
      size="lg"
    >
      <IconBrandGithub />
    </ActionIcon>
  );
};

export default Github;
