import { Group, Image, Text, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";

const Logo = () => {
  const useStyles = createStyles((theme) => ({
    link: {
      textDecoration: "none",
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      marginLeft: theme.spacing.md,
      fontSize: theme.fontSizes.lg,
      fontWeight: 700,
      transition: "color 200ms ease",
      marginRight: theme.spacing.xl,
      "&:hover": {
        color:
          theme.colorScheme === "dark" ? theme.colors.blue[4] : theme.black,
      },
    },
    group: {
      display: "flex",
      flexWrap: "nowrap",
    },
    logo: {
      maxWidth: 40,
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },
  }));
  const { classes } = useStyles();
  return (
    <Link to={"/"} className={classes.link}>
      <Group className={classes.group}>
        <Image src={"/lisansly.png"} className={classes.logo} />
        <Text>Lisansly</Text>
      </Group>
    </Link>
  );
};

export default Logo;
