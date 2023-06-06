import { Switch, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

const SwitchTheme = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Switch
      checked={colorScheme === "dark"}
      onClick={() => toggleColorScheme()}
      size="lg"
      radius="sm"
      onLabel={<IconSun size="1.25rem" stroke={1.5} />}
      offLabel={<IconMoonStars size="1.25rem" stroke={1.5} />}
    />
  );
};

export default SwitchTheme;
