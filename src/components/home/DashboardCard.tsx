import {
  createStyles,
  Paper,
  Title,
  Button,
  rem,
  Overlay,
  Center,
} from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  paper: {
    position: "relative",
    height: "300px",
    maxWidth: "400px",
    margin: theme.spacing.xs,
    borderRadius: 200,
    paddingInline: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.blue[1],
  },

  title: {
    zIndex: 2,
    position: "relative",
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.2,
    fontSize: rem(24),
    textAlign: "center",
    [theme.fn.smallerThan("md")]: {
      fontSize: rem(24),
    },
    marginTop: theme.spacing.xs,
  },
  overlay: {
    backgroundColor: theme.colorScheme === "dark" ? "#00000080" : "#ffffff80",
    borderRadius: 30,
  },
  button: {
    zIndex: 2,
    borderRadius: theme.radius.lg,
    width: "100%",
  },
  background: {
    width: "320px",
    height: "270px",
    borderRadius: 500,
    top: 30,
    [theme.fn.smallerThan("md")]: {
      height: "220px",
    },
    right: 0,
    position: "absolute",
    backgroundImage: theme.fn.gradient({
      from: theme.colorScheme === "dark" ? "black" : "white",
      to: theme.colorScheme === "dark" ? "blue" : "darkblue",
      deg: 45,
    }),
  },
}));

export function DashboardCard() {
  const { classes } = useStyles();

  return (
    <Paper className={classes.paper}>
      <Overlay zIndex={1} blur={100} className={classes.overlay} />
      <Center h={"100%"} display={"grid"}>
        <Title order={3} className={classes.title}>
          Create project from dashboard to license your application 🔒
        </Title>

        <Link to="/dashboard/cloud-based-licensing">
          <Button className={classes.button} size="lg">
            Dashboard
          </Button>
        </Link>
      </Center>
      <div className={classes.background} />
    </Paper>
  );
}
