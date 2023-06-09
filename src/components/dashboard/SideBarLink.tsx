import { createStyles, getStylesRef } from "@mantine/core";
import { Link } from "react-router-dom";

type SideBarLinkProps = {
  item: {
    label: string;
    path: string;
    icon: any;
  };
  tabValue: string | undefined;
};

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
        theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
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
}));

const SideBarLink = (props: SideBarLinkProps) => {
  const { classes, cx } = useStyles();
  return (
    <Link to={"/dashboard/" + props.item.path}>
      <span
        className={cx(classes.link, {
          [classes.linkActive]: props.item.path === props.tabValue,
        })}
        key={props.item.label}
      >
        <props.item.icon className={classes.linkIcon} stroke={1.5} />
        <span className={classes.label}>{props.item.label}</span>
      </span>
    </Link>
  );
};

export default SideBarLink;
