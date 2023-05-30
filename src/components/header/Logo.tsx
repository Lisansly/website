import { Group, Image, Text, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";

type LogoProps = {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  matches: boolean;
};

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginLeft: theme.spacing.md,
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    transition: "color 200ms ease",
    marginRight: theme.spacing.xl,
    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },
  group: {
    display: "flex",
    flexWrap: "nowrap",
  },
}));

const Logo = (props: LogoProps) => {
  const { classes } = useStyles();

  return (
    <Link
      to={"/"}
      className={classes.link}
      onClick={() => {
        props.setOpened(false);
      }}
    >
      <Group className={classes.group}>
        <Image src={"/lisansly.png"} width={props.matches ? 30 : 40} />
        <Text>Lisansly</Text>
      </Group>
    </Link>
  );
};

export default Logo;
