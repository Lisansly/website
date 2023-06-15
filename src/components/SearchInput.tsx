import { IconSearch } from "@tabler/icons-react";
import { TextInput } from "@mantine/core";

type SearchInputProps = {
  placeholder: string;
};

const SearchInput = (props: SearchInputProps) => {
  return (
    <TextInput
      w={"100%"}
      icon={<IconSearch size="1rem" />}
      placeholder={props.placeholder}
    />
  );
};

export default SearchInput;
