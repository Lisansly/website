import { useNavigate } from "react-router-dom";
import { HeroHeader } from "./HeroHeader";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeroHeader navigate={navigate} />
    </>
  );
};

export default Home;
