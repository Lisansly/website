import { Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

type SignTitleProps = {
  descriptionLink: string;
  description: string;
  linkText: string;
  title: string;
};

const SignTitle = (props: SignTitleProps) => {
  return (
    <>
      <Title mt={50} align="center" fw={900}>
        {props.title}
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        {props.description}{" "}
        <Link to={props.descriptionLink}>{props.linkText}</Link>
      </Text>
    </>
  );
};

export default SignTitle;
