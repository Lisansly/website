import { IconBrandGithub } from "@tabler/icons-react";
import SwitchTheme from "./SwitchTheme";
import Logo from "../Logo";
import { createStyles, ActionIcon, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    zIndex: 1,
    display: "flex",
    flexWrap: "nowrap",
    height: "max-content",
    padding: theme.spacing.md,
    width: "100%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[2],
    paddingInline: "40px",

    [theme.fn.largerThan("md")]: {
      paddingInline: "19.4%",
    },
  },
}));

const Header = () => {
  const { classes } = useStyles();

  return (
    <Group className={classes.header}>
      <Group position="apart" w="100%">
        <ActionIcon
          href="https://github.com/Lisansly"
          variant="default"
          target="_blank"
          component="a"
          size="lg"
        >
          <IconBrandGithub />
        </ActionIcon>
        <Logo />
        <SwitchTheme />
      </Group>
    </Group>
  );
};

export default Header;
