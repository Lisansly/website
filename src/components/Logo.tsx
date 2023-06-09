import { Image } from "@mantine/core";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <Image src="/lisansly.png" width={32} />
    </Link>
  );
};

export default Logo;
