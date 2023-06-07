import { useNavigate } from "react-router-dom";
import { HeroHeader } from "./HeroHeader";
import { Group } from "@mantine/core";
import Helper from "../Helper";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Group position="center" spacing={"xl"}>
        <HeroHeader navigate={navigate} />
        <Helper />
      </Group>
    </div>
  );
};

export default Home;
