import { Group, Paper, createStyles } from "@mantine/core";
import { DashboardCard } from "./DashboardCard";
import { HeroHeader } from "./HeroHeader";
import UsageExample from "./UsageExample";
import Helper from "./Helper";
import Features from "./Features";

const useStyles = createStyles((theme) => ({
  home: {
    marginBottom: "300px",
    minHeight: "100vh",
    display: "grid",
    gap: "300px",
  },
  paper: {
    borderRadius: 0,
    paddingBlock: "50px",
    height: "max-content",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.blue[6]
        : theme.colors.blue[2],

    [theme.fn.largerThan("md")]: {
      margin: "-10px",
      transform: "rotate(1deg)",
      paddingBlock: "100px",
    },
  },
  group: {
    [theme.fn.largerThan("md")]: {
      transform: "rotate(-1deg)",
    },
  },
}));

const Home = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.home}>
      <Group position="center" spacing={100}>
        <HeroHeader />
        <Helper />
      </Group>
      <Paper className={classes.paper}>
        <Group position="center" spacing={"100px"} className={classes.group}>
          <DashboardCard />
          <UsageExample />
        </Group>
      </Paper>
      <Features />
    </div>
  );
};

export default Home;
