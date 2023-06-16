import {
  Center,
  Group,
  Paper,
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
    title: "Cloud Based Licensing",
    description: "License your application in the cloud with ease and speed.",
    path: "cloud-based-licensing",
  },
  {
    icon: IconCloudComputing,
    title: "Cloud Based Licensing",
    description: "License your application in the cloud with ease and speed.",
    path: "cloud-based-licensing",
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 30,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 50,
  },
  card: {
    borderRadius: theme.radius.md,
    padding: theme.spacing.lg,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
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
}));

const Feature = (props: FeatureProps) => {
  return (
    <Paper className={props.classes.card}>
      <Group display={"grid"} position="center">
        <Group>
          <ThemeIcon size={"xl"}>
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
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            path={feature.path}
            classes={classes}
          />
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default Features;
