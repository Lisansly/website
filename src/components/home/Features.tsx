import {
  Center,
  Group,
  Overlay,
  SimpleGrid,
  Text,
  ThemeIcon,
  createStyles,
} from "@mantine/core";
import {
  Icon,
  IconArrowNarrowRight,
  IconCloudComputing,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

type FeatureProps = {
  icon: Icon;
  title: string;
  description: string;
  path: string;
  classes: any;
};

const features = [
  {
    icon: IconCloudComputing,
    title: "Cloud Based Licensing",
    description: "License your application in the cloud with ease and speed.",
    path: "cloud-based-licensing",
  },
  {
    icon: IconCloudComputing,
    title: "Cloud Based Licensing 2",
    description: "License your application in the cloud with ease and speed.",
    path: "cloud-based-licensing-2",
  },
  {
    icon: IconCloudComputing,
    title: "Cloud Based Licensing 3",
    description: "License your application in the cloud with ease and speed.",
    path: "cloud-based-licensing-3",
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 25,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 50,
  },
  overlay: {
    position: "relative",
    borderRadius: theme.radius.md,
    padding: theme.spacing.lg,
    backgroundColor: theme.colorScheme === "dark" ? "#00000080" : "#ffffff80",
  },
  description: {
    fontSize: 16,
    fontWeight: 500,
    maxWidth: 300,
  },
  link: {
    fontSize: 16,
    fontWeight: 500,
  },
  center: {
    display: "grid",
    margin: theme.spacing.xl,
  },
  background: {
    position: "absolute",
    width: "97%",
    height: "400px",
    zIndex: -2,
    backgroundColor: theme.colors.blue[9],
  },
}));

const Feature = (props: FeatureProps) => {
  return (
    <Overlay blur={100} opacity={0.1} className={props.classes.overlay}>
      <Group display={"grid"} position="center">
        <Group>
          <ThemeIcon radius={"md"} size={"xl"}>
            <props.icon size="1.2rem" />
          </ThemeIcon>
          <Text fw={700}>{props.title}</Text>
        </Group>
        <Text c={"dimmed"} className={props.classes.description}>
          {props.description}
        </Text>
        <Link to={"/dashboard/" + props.path}>
          <Group spacing={"xs"}>
            <Text className={props.classes.link}>See on dashboard</Text>
            <IconArrowNarrowRight stroke={3} size={"1rem"} />
          </Group>
        </Link>
      </Group>
    </Overlay>
  );
};

const Features = () => {
  const { classes } = useStyles();
  return (
    <Center className={classes.center}>
      <Center>
        <Text className={classes.title}>
          Choose the licensing method most suitable for your application
        </Text>
      </Center>
      <SimpleGrid
        cols={3}
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {features.map((feature) => (
          <Feature
            description={feature.description}
            title={feature.title}
            icon={feature.icon}
            path={feature.path}
            key={feature.path}
            classes={classes}
          />
        ))}
      </SimpleGrid>
      <div className={classes.background} />
    </Center>
  );
};

export default Features;
