import { Image } from "@mantine/core";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <Image src="/lisansly.png" width={34} mr={"md"} />
    </Link>
  );
};

export default Logo;
