import Link from "../Link";

type SideBarLinkProps = {
  item: {
    label: string;
    path: string;
    icon: any;
  };
  tabValue: string | undefined;
  classes: any;
  cx: any;
};

const SideBarLink = (props: SideBarLinkProps) => {
  return (
    <Link path={"/dashboard/" + props.item.path}>
      <span
        className={props.cx(props.classes.link, {
          [props.classes.linkActive]: props.item.path === props.tabValue,
        })}
        key={props.item.label}
      >
        <props.item.icon className={props.classes.linkIcon} stroke={1.5} />
        <span className={props.classes.label}>{props.item.label}</span>
      </span>
    </Link>
  );
};

export default SideBarLink;
