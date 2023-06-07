import { createStyles, Navbar, getStylesRef } from "@mantine/core";
import { Icon, IconCloudComputing } from "@tabler/icons-react";
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
    marginBottom: 10,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[1],
    [theme.fn.smallerThan("md")]: {
      padding: 8,
    },

    "&:hover": {
      cursor: "pointer",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[0],
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
        ? theme.colors.dark[5]
        : theme.colors.gray[3],
    ":hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[3],
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
        ? theme.colors.dark[9]
        : theme.colors.gray[2],
    zIndex: 1,
  },
}));

type linkProps = {
  path: string;
  label: string;
  icon: Icon;
};

const links: linkProps[] = [
  {
    path: "cloud-based-licensinga",
    label: "Cloud Based Licensinga",
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
    <Navbar pt={80} className={classes.sidebar}>
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
