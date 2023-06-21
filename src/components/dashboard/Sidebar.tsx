import { Box, createStyles } from "@mantine/core";
import { TabProps } from "./Dashboard";
import SidebarButton from "./SidebarButton";
import { NavigateFunction } from "react-router-dom";

type SidebarProps = {
  navigate: NavigateFunction;
  tabValue: string | undefined;
  tabs: TabProps[];
};

const useStyles = createStyles((theme) => ({
  sidebar: {
    padding: theme.spacing.xs,
    width: "350px",
    paddingTop: theme.spacing.md,
    [theme.fn.smallerThan("md")]: {
      width: "75px",
    },
  },
}));

export default function Sidebar(props: SidebarProps) {
  const { classes } = useStyles();

  return (
    <Box className={classes.sidebar}>
      {props.tabs.map((tab) => (
        <SidebarButton
          tabValue={props.tabValue}
          navigate={props.navigate}
          key={tab.path}
          item={tab}
        />
      ))}
    </Box>
  );
}
