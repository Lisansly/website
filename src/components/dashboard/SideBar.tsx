import { createStyles, Navbar, getStylesRef } from "@mantine/core";
import SideBarLink from "./SideBarLink";
import { TabProps } from "./Dashboard";

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    marginBottom: 10,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[3],
    [theme.fn.smallerThan("md")]: {
      padding: 8,
    },

    "&:hover": {
      cursor: "pointer",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },
  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[0]
        : theme.colors.gray[9],
  },

  linkActive: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },
  label: {
    marginLeft: theme.spacing.sm,
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  sidebar: {
    height: "100%",
    border: "none",
    padding: theme.spacing.md,
    [theme.fn.smallerThan("sm")]: {
      width: "70px",
      paddingTop: 110,
    },
    [theme.fn.largerThan("sm")]: {
      width: "310px",
      paddingTop: 150,
    },
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[2],
    zIndex: 1,
  },
}));

type SideBarProps = {
  tabValue: string | undefined;
  tabs: TabProps[];
};

export function SideBar(props: SideBarProps) {
  const { classes, cx } = useStyles();

  return (
    <Navbar className={classes.sidebar}>
      <Navbar.Section grow>
        {props.tabs.map((tab) => (
          <SideBarLink
            tabValue={props.tabValue}
            classes={classes}
            key={tab.path}
            item={tab}
            cx={cx}
          />
        ))}
      </Navbar.Section>
    </Navbar>
  );
}
