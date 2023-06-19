import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import {
  Autocomplete,
  createStyles,
  Group,
  Select,
  Code,
  Paper,
} from "@mantine/core";

const questions = [
  {
    question: "test question 1",
    answer: "test answer 1",
  },
];

const useStyles = createStyles((theme) => ({
  paper: {
    borderRadius: theme.radius.lg,
    maxWidth: "450px",
    position: "relative",
    padding: theme.spacing.md,
    margin: theme.spacing.xl,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
  },
  code: {
    width: "100%",
    minHeight: "100px",
    padding: theme.spacing.sm,
    wordBreak: "break-word",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "500px",
    top: -100,
    zIndex: -2,
    borderRadius: "100%",
    backgroundImage: theme.fn.gradient({
      from: theme.colors.blue[7],
      to: theme.colors.violet[9],
    }),
  },
}));

const Helper = () => {
  const { classes } = useStyles();
  const [answer, setAnswer] = useState<string>(
    "Upsss! Hello, do you have a question?"
  );
  const [typedAnswer, setTypedAnswer] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (answer.length > typedAnswer.length) {
        setTypedAnswer(answer.slice(0, typedAnswer.length + 1));
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [answer, typedAnswer]);

  const spring = useSpring({
    from: { x: 1000 },
    to: { x: 0 },
    config: { mass: 13, tension: 1000, friction: 100 },
  });

  return (
    <div style={{ position: "relative" }}>
      <animated.div style={spring}>
        <Paper className={classes.paper}>
          <Group position="center">
            <Select
              label="Select the category related to your question"
              data={["All", "Account"]}
              defaultValue={"All"}
              variant="filled"
              size="xs"
              w={"100%"}
            />
            <Code className={classes.code} color={"blue"}>
              {typedAnswer}
            </Code>
            <Autocomplete
              variant="filled"
              data={questions.map((question) => question.question)}
              onChange={(value) => {
                const question = questions.find(
                  (question) => question.question === value
                );
                setAnswer(question?.answer || "...");
                setTypedAnswer("");
              }}
              placeholder="Write your question"
              w={"100%"}
            />
          </Group>
        </Paper>
      </animated.div>

      <div className={classes.background} />
    </div>
  );
};

export default Helper;
