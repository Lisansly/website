import { createStyles, Paper, Title, Button, rem } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    height: "500px",
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
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.2,
    fontSize: rem(34),
    marginTop: theme.spacing.xs,
  },
}));

export function DashboardCard() {
  const { classes } = useStyles();

  return (
    <Paper withBorder className={classes.card}>
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