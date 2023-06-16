import { DashboardCard } from "./DashboardCard";
import { useNavigate } from "react-router-dom";
import { Group, Paper, createStyles } from "@mantine/core";
import { HeroHeader } from "./HeroHeader";
import UsageExample from "./UsageExample";
import Helper from "./Helper";

const useStyles = createStyles((theme) => ({
  paper: {
    borderRadius: 0,
    paddingBlock: "50px",
    height: "max-content",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.blue[9]
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
  const navigate = useNavigate();
  const { classes } = useStyles();

  return (
    <div
      style={{
        minHeight: "100vh",
        gap: "200px",
        display: "grid",
        marginBottom: "300px",
      }}
    >
      <Group position="center" spacing={"xl"}>
        <HeroHeader navigate={navigate} />
        <Helper />
      </Group>
      <Paper className={classes.paper}>
        <Group position="center" spacing={"100px"} className={classes.group}>
          <DashboardCard />
          <UsageExample />
        </Group>
      </Paper>
    </div>
  );
};

export default Home;
