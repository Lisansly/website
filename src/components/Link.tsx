import { Link as ReactRouterDomLink } from "react-router-dom";

type LinkProps = {
  children: React.ReactNode;
  path: string;
};

const Link = (props: LinkProps) => {
  return (
    <ReactRouterDomLink to={props.path}>{props.children}</ReactRouterDomLink>
  );
};

export default Link;
