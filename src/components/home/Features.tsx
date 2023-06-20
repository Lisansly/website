import { Link } from "react-router-dom";
import {
  createStyles,
  SimpleGrid,
  ThemeIcon,
  Overlay,
  Center,
  Group,
  Paper,
  Text,
} from "@mantine/core";
import {
  IconArrowNarrowRight,
  IconCloudComputing,
  Icon,
} from "@tabler/icons-react";

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
  paper: {
    zIndex: 1,
    borderRadius: 20,

    position: "relative",
    padding: theme.spacing.xl,
  },
  overlay: {
    borderRadius: 20,

    zIndex: -1,
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
  featureBackground: {
    position: "absolute",
    width: "50%",
    height: 160,
    borderRadius: 20,
    zIndex: -2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.blue[9]
        : theme.colors.blue[3],
  },
  featuresBackground: {
    position: "absolute",
    backgroundImage: theme.fn.gradient({
      from: theme.colors.blue[9],
      to: theme.colors.violet[4],
    }),
    width: "100%",
    maxWidth: 1200,
    height: "50%",
    maxHeight: 300,
    marginTop: 200,
    zIndex: -2,
  },
}));

type FeatureProps = {
  description: string;
  title: string;
  path: string;
  classes: any;
  icon: Icon;
};

const Feature = (props: FeatureProps) => {
  return (
    <Paper className={props.classes.paper}>
      <Overlay blur={65} className={props.classes.overlay} />
      <div className={props.classes.featureBackground} />
      <Group display={"grid"} position="center">
        <Group>
          <ThemeIcon radius={"md"} variant="default" size={"xl"}>
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
    </Paper>
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
      <Center>
        <div className={classes.featuresBackground} />
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
    </Center>
  );
};

export default Features;
