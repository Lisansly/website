import { IconBrandGithub } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import {
  createStyles,
  Container,
  Button,
  Group,
  Text,
  rem,
} from "@mantine/core";
import { Prism } from "@mantine/prism";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    margin: theme.spacing.xs,
  },

  inner: {
    position: "relative",
    paddingTop: rem(100),
    paddingBottom: rem(120),

    [theme.fn.smallerThan("sm")]: {
      paddingBottom: rem(80),
      paddingTop: rem(10),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(50),
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.sm,
    fontSize: rem(24),
    fontWeight: 500,
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
    borderRadius: theme.radius.lg,
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
  background: {
    position: "absolute",
    width: "100%",
    maxWidth: "900px",
    top: 300,
    left: -200,
    height: "600px",
    zIndex: -2,
    borderRadius: "100%",
    backgroundImage: theme.fn.gradient({
      from: theme.colors.blue[7],
      to: theme.colors.grape[9],
    }),
  },
}));

export function HeroHeader() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <div className={classes.background} />
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          License your application with Lisansly
        </h1>

        <Text className={classes.description} color="dimmed">
          Save your time and effort.
        </Text>
        <Prism radius={"md"} mt={"xl"} language="bash" w={"210px"}>
          npm install lisansly
        </Prism>

        <Group className={classes.controls}>
          <Button
            onClick={() => navigate("/documentation")}
            gradient={{ from: "blue", to: "#4DABF7" }}
            className={classes.control}
            variant="gradient"
            size="xl"
          >
            Get started
          </Button>
          <Button
            href="https://github.com/Lisansly"
            leftIcon={<IconBrandGithub />}
            className={classes.control}
            variant="light"
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
