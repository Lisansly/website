import { IconSearch } from "@tabler/icons-react";
import { TextInput } from "@mantine/core";

const SearchProject = () => {
  return (
    <TextInput
      w={"100%"}
      icon={<IconSearch size="1rem" />}
      placeholder="Search project"
    />
  );
};

export default SearchProject;
