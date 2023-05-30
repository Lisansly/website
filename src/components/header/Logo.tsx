import { Group, Image, Text, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";

type LogoProps = {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  marginLeft: string;
  smallSize: number;
  largeSize: number;
  matches: boolean;
  label: string;
  path: string;
  logo: string;
};

const useStyles = createStyles((theme) => ({
  label: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
  },
}));

const Logo = (props: LogoProps) => {
  const { classes } = useStyles();

  return (
    <Link
      to={props.path}
      onClick={() => {
        props.setOpened(false);
      }}
    >
      <Group ml={props.marginLeft}>
        <Image
          src={props.logo}
          width={props.matches ? props.smallSize : props.largeSize}
        />
        <Text className={classes.label}>{props.label}</Text>
      </Group>
    </Link>
  );
};

export default Logo;
