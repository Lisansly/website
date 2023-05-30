import { Link as ReactRouterDomLink } from "react-router-dom";

type LinkProps = {
  label: string;
  path: string;
};

const Link = (props: LinkProps) => {
  return <ReactRouterDomLink to={props.path}>{props.label}</ReactRouterDomLink>;
};

export default Link;
