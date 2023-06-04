import { IconPlus } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { Button } from "@mantine/core";

const NewProjectButton = () => {
  const matches = useMediaQuery(`(max-width: 770px)`);
  return (
    <Button variant="default">
      {matches ? <IconPlus size={"1rem"} /> : "New Project"}
    </Button>
  );
};

export default NewProjectButton;
