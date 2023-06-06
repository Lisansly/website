import { useNavigate } from "react-router-dom";
import { HeroHeader } from "./HeroHeader";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeroHeader navigate={navigate} />
    </div>
  );
};

export default Home;
