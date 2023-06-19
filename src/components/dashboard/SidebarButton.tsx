import {
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
  createStyles,
  getStylesRef,
} from "@mantine/core";
import { NavigateFunction } from "react-router-dom";

type SidebarLinkProps = {
  item: {
    label: string;
    path: string;
    icon: any;
  };
  navigate: NavigateFunction;
  tabValue: string | undefined;
};

const useStyles = createStyles((theme) => ({
  label: {
    marginLeft: theme.spacing.xs,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  button: {
    display: "flex",
    flexWrap: "nowrap",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: theme.spacing.xs,
    [theme.fn.smallerThan("md")]: {
      padding: "max-content",
    },
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    width: "100%",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[1],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  activeButton: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

const SidebarButton = (props: SidebarLinkProps) => {
  const { classes, cx } = useStyles();
  return (
    <UnstyledButton
      className={cx(classes.button, {
        [classes.activeButton]: props.item.path === props.tabValue,
      })}
      onClick={() => props.navigate("/dashboard/" + props.item.path)}
    >
      <Group spacing={"xs"}>
        <ThemeIcon size={"lg"}>
          <props.item.icon size="0.95rem" />
        </ThemeIcon>
        <Text className={classes.label}>{props.item.label}</Text>
      </Group>
    </UnstyledButton>
  );
};

export default SidebarButton;
