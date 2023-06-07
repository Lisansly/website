import { IconSearch } from "@tabler/icons-react";
import { TextInput } from "@mantine/core";

const SearchProject = () => {
  return (
    <TextInput
      icon={<IconSearch size="1rem" />}
      placeholder="Search project"
      w="100%"
    />
  );
};

export default SearchProject;
