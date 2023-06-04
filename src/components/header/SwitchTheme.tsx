import { Switch, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

type SwitchThemeProps = {
  ml: string;
};

const SwitchTheme = (props: SwitchThemeProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Switch
      checked={colorScheme === "dark"}
      onClick={() => toggleColorScheme()}
      size="lg"
      radius="sm"
      ml={props.ml}
      onLabel={<IconSun size="1.25rem" stroke={1.5} />}
      offLabel={<IconMoonStars size="1.25rem" stroke={1.5} />}
    />
  );
};

export default SwitchTheme;
