import { Text, createStyles } from "@mantine/core";
import { Link as Lnk } from "react-router-dom";

type LinkProps = {
  label: string;
  path: string;
};

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginLeft: theme.spacing.md,
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
    transition: "color 200ms ease",
  },
}));

const Link = (props: LinkProps) => {
  const { classes } = useStyles();

  return (
    <Lnk to={props.path} className={classes.link}>
      <Text>{props.label}</Text>
    </Lnk>
  );
};

export default Link;
