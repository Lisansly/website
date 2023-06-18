import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

const SwitchTheme = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      size="lg"
      radius="md"
      variant="subtle"
    >
      {colorScheme === "dark" ? (
        <IconSun size="1.2rem" />
      ) : (
        <IconMoonStars size="1.2rem" />
      )}
    </ActionIcon>
  );
};

export default SwitchTheme;
