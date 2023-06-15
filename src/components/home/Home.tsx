import { Group, Transition } from "@mantine/core";
import { DashboardCard } from "./DashboardCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HeroHeader } from "./HeroHeader";
import UsageExample from "./UsageExample";
import Helper from "./Helper";

const Home = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{ minHeight: "100vh", gap: "200px", display: "grid" }}>
      <Transition mounted={mounted} transition="scale" duration={750}>
        {(styles) => (
          <Group style={styles} position="center" spacing={"xl"}>
            <HeroHeader navigate={navigate} />
            <Helper />
          </Group>
        )}
      </Transition>
      <Group position="center" spacing={"100px"} mb={"300px"}>
        <DashboardCard />
        <UsageExample />
      </Group>
    </div>
  );
};

export default Home;
