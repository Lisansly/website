import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

type SwitchThemeProps = {
  matches: boolean;
  variant: string;
  radius: string;
  title: string;
  size: string;
  mr: string;
};

const SwitchTheme = (props: SwitchThemeProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant={props.variant}
      onClick={() => toggleColorScheme()}
      title={props.title}
      radius={props.radius}
      mr={props.mr}
      ml={props.matches ? "auto" : "0"}
      size={props.size}
    >
      {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
    </ActionIcon>
  );
};

export default SwitchTheme;
