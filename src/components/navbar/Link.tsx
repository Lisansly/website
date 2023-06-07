import { Text } from "@mantine/core";
import { Link as ReactRouterDomLink } from "react-router-dom";

type LinkProps = {
  className: any;
  label: string;
  path: string;
};

const Link = (props: LinkProps) => {
  return (
    <ReactRouterDomLink to={props.path}>
      <Text fw={700} className={props.className}>
        {props.label}
      </Text>
    </ReactRouterDomLink>
  );
};

export default Link;
