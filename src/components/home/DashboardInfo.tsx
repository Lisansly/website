import { createStyles, Paper, Title, Button, rem, Center } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  paper: {
    position: "relative",
    height: "300px",
    maxWidth: "400px",
    margin: theme.spacing.xs,
    borderRadius: theme.radius.lg,
    paddingInline: theme.spacing.xl,
    backgroundColor: "transparent",
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
    position: "relative",
    height: "400px",
    backgroundImage: theme.fn.gradient({
      from: theme.colors.violet[9],
      to: theme.colors.blue[7],
    }),
    bottom: 250,
    zIndex: -2,
  },
}));
const DashboardInfo = () => {
  const { classes } = useStyles();

  return (
    <Paper className={classes.paper}>
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
};

export default DashboardInfo;
