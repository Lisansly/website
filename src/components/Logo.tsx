import { Group, Image, Text, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";

type LogoProps = {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const Logo = ({ setOpened }: LogoProps) => {
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
      minWidth: 40,
      [theme.fn.smallerThan("md")]: {
        maxWidth: 30,
        minWidth: 30,
      },
    },
  }));
  const { classes } = useStyles();
  return (
    <Link
      to={"/"}
      className={classes.link}
      onClick={() => {
        setOpened(false);
      }}
    >
      <Group className={classes.group}>
        <Image src={"/lisansly.png"} className={classes.logo} />
        <Text>Lisansly</Text>
      </Group>
    </Link>
  );
};

export default Logo;
