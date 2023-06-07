import { Switch, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

const SwitchTheme = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Switch
      offLabel={<IconMoonStars size="1.25rem" stroke={1.5} />}
      onLabel={<IconSun size="1.25rem" stroke={1.5} />}
      onClick={() => toggleColorScheme()}
      checked={colorScheme === "dark"}
      radius="sm"
      size="lg"
    />
  );
};

export default SwitchTheme;
