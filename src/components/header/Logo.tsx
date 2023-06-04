import { Group, Image, Text, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";

type LogoProps = {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  matches: boolean;
};

const useStyles = createStyles((theme) => ({
  label: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  group: {
    display: "flex",
    flexWrap: "nowrap",
    marginRight: theme.spacing.xl,
  },
}));

const Logo = (props: LogoProps) => {
  const { classes } = useStyles();

  return (
    <Link to="/">
      <Group
        className={classes.group}
        onClick={() => {
          props.setOpened(false);
        }}
      >
        <Image src="/lisansly.png" width={props.matches ? 30 : 35} />
        <Text
          gradient={{ from: "blue", to: "#4DABF7" }}
          variant="gradient"
          size={props.matches ? 22 : 25}
          fw={900}
          className={classes.label}
        >
          Lisansly
        </Text>
      </Group>
    </Link>
  );
};

export default Logo;
