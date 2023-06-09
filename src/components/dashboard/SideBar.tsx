import { createStyles, Navbar } from "@mantine/core";
import SideBarLink from "./SideBarLink";
import { TabProps } from "./Dashboard";

const useStyles = createStyles((theme) => ({
  sidebar: {
    zIndex: 0,
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
  },
}));

type SideBarProps = {
  tabValue: string | undefined;
  tabs: TabProps[];
};

export function SideBar(props: SideBarProps) {
  const { classes } = useStyles();

  return (
    <Navbar className={classes.sidebar}>
      <Navbar.Section grow>
        {props.tabs.map((tab) => (
          <SideBarLink tabValue={props.tabValue} key={tab.path} item={tab} />
        ))}
      </Navbar.Section>
    </Navbar>
  );
}
