import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

type SwitchThemeProps = {
  matches: boolean;
};

const SwitchTheme = (props: SwitchThemeProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="default"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      radius={"md"}
      mr={"lg"}
      ml={props.matches ? "auto" : "0px"}
      size={"lg"}
    >
      {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
    </ActionIcon>
  );
};

export default SwitchTheme;
