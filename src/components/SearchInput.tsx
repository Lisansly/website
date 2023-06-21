import { IconSearch } from "@tabler/icons-react";
import { TextInput } from "@mantine/core";

type SearchInputProps = {
  placeholder: string;
};

const SearchInput = (props: SearchInputProps) => {
  return (
    <TextInput
      icon={<IconSearch size="1rem" />}
      placeholder={props.placeholder}
      variant="unstyled"
      sx={(theme) => ({
        width: "100%",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[0],
        borderRadius: theme.radius.md,
      })}
    />
  );
};

export default SearchInput;
