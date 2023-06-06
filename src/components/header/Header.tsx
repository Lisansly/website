import SwitchTheme from "./SwitchTheme";
import Logo from "./Logo";
import {
  Header as MantineHeader,
  createStyles,
  Group,
  ActionIcon,
} from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  header: {
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[3],
    display: "flex",
    flexWrap: "nowrap",
    height: "100%",
    paddingRight: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[2],
  },
}));

const Header = () => {
  const { classes } = useStyles();

  return (
    <MantineHeader height={60} className={classes.header}>
      <Group position="apart" w={"100%"}>
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
    </MantineHeader>
  );
};

export default Header;
