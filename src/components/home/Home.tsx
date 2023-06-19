import DashboardImage from "./DashboardImage";
import DashboardInfo from "./DashboardInfo";
import { HeroHeader } from "./HeroHeader";
import UsageExample from "./UsageExample";
import { Group } from "@mantine/core";
import Features from "./Features";
import Helper from "./Helper";

const Home = () => {
  return (
    <div
      style={{
        marginTop: "100px",
        marginBottom: "400px",
        minHeight: "100vh",
        display: "grid",
        gap: "300px",
      }}
    >
      <Group position="center" spacing={"100px"}>
        <HeroHeader />
        <Helper />
      </Group>
      <Group position="center" spacing={"100px"}>
        <DashboardImage />
        <DashboardInfo />
      </Group>
      <Group position="center" spacing={"100px"}>
        <UsageExample />
      </Group>
      <Features />
    </div>
  );
};

export default Home;
