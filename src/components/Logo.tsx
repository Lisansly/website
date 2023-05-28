import { Group, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <Group>
        <Image src={"/lisansly.png"} maw={40} />
        <Text fw={800} size={"xl"} c={"#1C7ED6"}>
          Lisansly
        </Text>
      </Group>
    </Link>
  );
};

export default Logo;
