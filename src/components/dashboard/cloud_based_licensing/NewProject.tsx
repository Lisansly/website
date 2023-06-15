import { IconPlus } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import TextInput from "../../TextInput";
import { useState } from "react";
import Button from "../../Button";

const NewProject = () => {
  const matches = useMediaQuery(`(max-width: 770px)`);
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <>
      <Modal
        opened={opened}
        withCloseButton={false}
        size={"md"}
        onClose={() => {
          setOpened(false);
        }}
        overlayProps={{
          color: "gray",
          opacity: 0.55,
          blur: 3,
        }}
        transitionProps={{ transition: "slide-down" }}
      >
        <TextInput
          label="Project Name"
          placeholder="New project name"
          key="newprojectname"
        />
        <Button fullWidth>Create</Button>
      </Modal>
      <Button
        fullWidth={false}
        onClick={() => {
          setOpened(true);
        }}
      >
        {matches ? <IconPlus size="1rem" /> : "New Project"}
      </Button>
    </>
  );
};

export default NewProject;
