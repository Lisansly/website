import { createStyles, Navbar, getStylesRef } from "@mantine/core";
import { IconCloudComputing } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import SideBarLink from "./SideBarLink";
import { useEffect } from "react";

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    marginBottom: 5,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    [theme.fn.smallerThan("md")]: {
      padding: 8,
    },
    "&:hover": {
      cursor: "pointer",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[1],
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
        ? theme.colors.dark[9]
        : theme.colors.gray[2],
    ":hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2],
    },
  },
  label: {
    marginLeft: theme.spacing.sm,
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  sidebar: {
    border: "none",
    padding: theme.spacing.md,
    [theme.fn.smallerThan("sm")]: {
      width: "70px",
    },
    [theme.fn.largerThan("sm")]: {
      width: "310px",
    },
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    zIndex: 1,
  },
}));

const links = [
  {
    path: "cloud-based-licensing",
    label: "Cloud Based Licensing",
    icon: IconCloudComputing,
  },
];

type SideBarProps = {
  tabValue: string | undefined;
};

export function SideBar(props: SideBarProps) {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    if (!links.some((link) => link.path === props.tabValue)) {
      navigate("/dashboard/cloud-based-licensing");
    }
  }, [props.tabValue]);

  return (
    <Navbar className={classes.sidebar}>
      <Navbar.Section grow>
        {links.map((link) => (
          <SideBarLink
            tabValue={props.tabValue}
            classes={classes}
            key={link.path}
            item={link}
            cx={cx}
          />
        ))}
      </Navbar.Section>
    </Navbar>
  );
}
