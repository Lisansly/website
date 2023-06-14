import { Button, Text, createStyles } from "@mantine/core";
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
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  button: {
    marginBottom: theme.spacing.xs,
    width: "100%",
    [theme.fn.smallerThan("sm")]: {
      padding: 0,
      width: "40px",
      height: "40px",
    },
  },
}));

const SidebarButton = (props: SidebarLinkProps) => {
  const { classes } = useStyles();
  return (
    <Button
      variant={props.item.path === props.tabValue ? "filled" : "subtle"}
      onClick={() => props.navigate("/dashboard/" + props.item.path)}
      className={classes.button}
      size="sm"
      radius={"xs"}
    >
      <props.item.icon size="1.25rem" />
      <Text className={classes.label}>{props.item.label}</Text>
    </Button>
  );
};

export default SidebarButton;
