import { DashboardCard } from "./DashboardCard";
import { useNavigate } from "react-router-dom";
import { HeroHeader } from "./HeroHeader";
import UsageExample from "./UsageExample";
import { Group } from "@mantine/core";
import Helper from "./Helper";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", gap: "200px", display: "grid" }}>
      <Group position="center" spacing={"xl"}>
        <HeroHeader navigate={navigate} />
        <Helper />
      </Group>
      <Group position="center" spacing={"100px"} mb={"300px"}>
        <DashboardCard />
        <UsageExample />
      </Group>
    </div>
  );
};

export default Home;
