import { IconChevronLeft } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/dashboard/cloud-based-licensing">
      <ActionIcon variant="default">
        <IconChevronLeft size="1.125rem" />
      </ActionIcon>
    </Link>
  );
};

export default BackButton;
