import { createStyles, Paper, Title, Button, rem } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    height: "500px",
    [theme.fn.smallerThan("md")]: {
      height: "400px",
    },
    maxWidth: "400px",
    margin: theme.spacing.xs,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.blue[1],
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.2,
    fontSize: rem(34),
    [theme.fn.smallerThan("md")]: {
      fontSize: rem(24),
    },
    marginTop: theme.spacing.xs,
  },
}));

export function DashboardCard() {
  const { classes } = useStyles();

  return (
    <Paper className={classes.card}>
      <div>
        <Title order={3} className={classes.title}>
          Create project from dashboard to license your application 🔒
        </Title>
      </div>
      <Link to="/dashboard/cloud-based-licensing">
        <Button>Dashboard</Button>
      </Link>
    </Paper>
  );
}
