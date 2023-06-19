import { Link as ReactRouterDomLink } from "react-router-dom";
import { createStyles, Center, Group, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    position: "relative",
    width: "100%",
    paddingBottom: theme.spacing.xl,
    paddingTop: 250,
    display: "grid",
  },
  divider: {
    height: 2,
    borderRadius: 100,
    backgroundImage: theme.fn.gradient({
      from: theme.colors.violet[9],
      to: theme.colors.blue[7],
    }),
    marginBottom: theme.spacing.xl,
  },
  background: {
    borderTopRightRadius: "100%",
    borderTopLeftRadius: "100%",
    zIndex: -2,
    position: "absolute",
    bottom: "0px",
    backgroundImage: theme.fn.gradient({
      from: theme.colors.violet[9],
      to: theme.colors.blue[7],
    }),
    width: "40%",
    height: "45%",
  },
  link: {
    transition: "200ms ease",
    ":hover": {
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
    },
  },
}));

type LinkProps = {
  text: string;
  path: string;
};

const links: LinkProps[] = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Documentation",
    path: "/documentation",
  },
  {
    text: "Dashboard",
    path: "/dashboard/cloud-based-licensing",
  },
];

const Footer = () => {
  const { classes } = useStyles();

  const Link = (props: LinkProps) => {
    return (
      <ReactRouterDomLink to={props.path} className={classes.link}>
        {props.text}
      </ReactRouterDomLink>
    );
  };

  return (
    <Group position="center" className={classes.footer}>
      <Group display={"grid"} style={{ zIndex: 1 }}>
        <Group>
          {links.map((link) => (
            <Link text={link.text} path={link.path} key={link.path} />
          ))}
        </Group>
        <div className={classes.divider} />
        <Center>
          <Text>
            Developed by{" "}
            <a target="_blank" href="https://github.com/orgs/Lisansly/people">
              Lisansly Team
            </a>{" "}
            ❤️
          </Text>
        </Center>
      </Group>
      <Center>
        <div className={classes.background} />
      </Center>
    </Group>
  );
};

export default Footer;
