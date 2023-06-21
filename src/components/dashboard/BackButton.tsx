import { IconChevronLeft } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { Link } from "react-router-dom";

const BackButton = ({ path }: { path: string }) => {
  return (
    <Link to={path}>
      <ActionIcon radius={"md"}>
        <IconChevronLeft size="1.125rem" />
      </ActionIcon>
    </Link>
  );
};

export default BackButton;
