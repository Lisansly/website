import { Link as ReactRouterDomLink } from "react-router-dom";
import { Text } from "@mantine/core";

type LinkProps = {
  className: any;
  label: string;
  path: string;
};

const Link = (props: LinkProps) => {
  return (
    <ReactRouterDomLink to={props.path}>
      <Text fw={700} size="sm" className={props.className}>
        {props.label}
      </Text>
    </ReactRouterDomLink>
  );
};

export default Link;
