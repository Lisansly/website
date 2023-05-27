import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

export function Home() {
  const { classes } = useStyles();
  const features = [
    {
      title: "Free usage",
      description:
        "Lisansly offers a completely free licensing solution, allowing developers to license their web and desktop applications without any upfront costs.",
    },
  ];
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              License your app with lisansly
            </Title>
            <Text color="dimmed" mt="md">
              Lisansly is a platform that developers can use to license web or
              desktop applications. This platform simplifies the license
              management process, saving developers time and effort.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              {features.map((feature) => (
                <List.Item>
                  <b>{feature.title}</b> – {feature.description}
                </List.Item>
              ))}
            </List>

            <Group mt={30}>
              <Button radius="lg" size="md" className={classes.control}>
                Get started
              </Button>
              <Button
                variant="default"
                radius="lg"
                size="md"
                className={classes.control}
              >
                Dashboard
              </Button>
            </Group>
          </div>
          <Image src={"/lisansly.png"} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
