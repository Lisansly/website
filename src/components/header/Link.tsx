import { Text } from "@mantine/core";
import { Link as ReactRouterDomLink } from "react-router-dom";

type LinkProps = {
  label: string;
  path: string;
};

const Link = (props: LinkProps) => {
  return (
    <ReactRouterDomLink to={props.path}>
      <Text>{props.label}</Text>
    </ReactRouterDomLink>
  );
};

export default Link;
