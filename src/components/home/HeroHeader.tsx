import {
  createStyles,
  Container,
  Button,
  Group,
  Text,
  rem,
} from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import { NavigateFunction } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
  },

  inner: {
    position: "relative",
    paddingTop: rem(100),
    paddingBottom: rem(120),

    [theme.fn.smallerThan("sm")]: {
      paddingBottom: rem(80),
      paddingTop: rem(80),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(62),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(42),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: rem(24),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(18),
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: rem(54),
    paddingLeft: rem(38),
    paddingRight: rem(38),

    [theme.fn.smallerThan("sm")]: {
      height: rem(54),
      paddingLeft: rem(18),
      paddingRight: rem(18),
      flex: 1,
    },
  },
}));

type HeroHeaderProps = {
  navigate: NavigateFunction;
};

export function HeroHeader(props: HeroHeaderProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          License your application with{" "}
          <Text
            gradient={{ from: "blue", to: "#4DABF7" }}
            variant="gradient"
            component="span"
            inherit
          >
            Lisansly
          </Text>
        </h1>

        <Text className={classes.description} color="dimmed">
          Lisansly is a platform that developers can use to license web or
          desktop applications. This platform simplifies the license management
          process, saving developers time and effort.
        </Text>

        <Group className={classes.controls}>
          <Button
            onClick={() => props.navigate("/documentation")}
            gradient={{ from: "blue", to: "#4DABF7" }}
            className={classes.control}
            variant="gradient"
            size="xl"
          >
            Get started
          </Button>
          <Button
            leftIcon={<IconBrandGithub />}
            href="https://github.com/Lisansly"
            className={classes.control}
            variant="default"
            target="_blank"
            component="a"
            size="xl"
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
