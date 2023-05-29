import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const SwitchTheme = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const matches = useMediaQuery(`(max-width: 630px)`);
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="default"
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      radius={"md"}
      mr={"lg"}
      ml={matches ? "auto" : "0px"}
      size={"lg"}
    >
      {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
    </ActionIcon>
  );
};

export default SwitchTheme;
