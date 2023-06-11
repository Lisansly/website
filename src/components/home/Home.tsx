import { Group, Transition } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HeroHeader } from "./HeroHeader";
import Helper from "./Helper";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Transition mounted={mounted} transition="scale" duration={750}>
        {(styles) => (
          <Group style={styles} position="center" spacing={"xl"}>
            <HeroHeader navigate={navigate} />
            <Helper />
          </Group>
        )}
      </Transition>
    </div>
  );
};

export default Home;
