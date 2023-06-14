import { createStyles, Navbar } from "@mantine/core";
import { TabProps } from "./Dashboard";
import SidebarLink from "./SidebarLink";

const useStyles = createStyles((theme) => ({
  sidebar: {
    zIndex: 0,
    height: "100%",
    border: "none",
    padding: theme.spacing.md,
    [theme.fn.smallerThan("sm")]: {
      width: "70px",
      paddingTop: 120,
    },
    [theme.fn.largerThan("sm")]: {
      width: "310px",
      paddingTop: 145,
    },
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[2],
  },
}));

type SidebarProps = {
  tabValue: string | undefined;
  tabs: TabProps[];
};

export default function Sidebar(props: SidebarProps) {
  const { classes } = useStyles();

  return (
    <Navbar className={classes.sidebar}>
      <Navbar.Section grow>
        {props.tabs.map((tab) => (
          <SidebarLink tabValue={props.tabValue} key={tab.path} item={tab} />
        ))}
      </Navbar.Section>
    </Navbar>
  );
}
