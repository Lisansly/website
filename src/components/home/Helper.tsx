import { Autocomplete, createStyles, Group, Code } from "@mantine/core";
import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

const questions = [
  {
    question: "test question 1",
    answer: "test answer 1",
  },
];

const useStyles = createStyles((theme) => ({
  code: {
    minHeight: "250px",
    wordBreak: "break-word",
    borderRadius: theme.radius.md,
    position: "relative",
    padding: theme.spacing.md,
    margin: theme.spacing.lg,
    width: "450px",
    [theme.fn.smallerThan("xs")]: {
      width: "270px",
    },
  },
  autocomplete: {
    position: "absolute",
    bottom: 25,
    paddingLeft: 32.5,
    width: "457.5px",
    [theme.fn.smallerThan("xs")]: {
      width: "277.5px",
    },
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "500px",
    top: -100,
    zIndex: -2,
    backgroundImage: theme.fn.gradient({
      from: theme.colors.blue[7],
      to: theme.colors.violet[9],
    }),
  },
}));

const Helper = () => {
  const { classes } = useStyles();
  const [answer, setAnswer] = useState<string>("Upsss!");
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
    onRest: () => {
      setAnswer("Hello, do you have a question?");
    },
  });

  return (
    <div style={{ position: "relative" }}>
      <animated.div style={spring}>
        <Group position="center" display={"grid"}>
          <Code className={classes.code} color={"blue"}>
            {typedAnswer}
          </Code>

          <Autocomplete
            variant="unstyled"
            className={classes.autocomplete}
            data={questions.map((question) => question.question)}
            onChange={(value) => {
              const question = questions.find(
                (question) => question.question === value
              );
              setAnswer(
                question?.answer || value.length > 0
                  ? "..."
                  : "Do you have a question?"
              );
              setTypedAnswer("");
            }}
            placeholder="Write your question"
          />
        </Group>
      </animated.div>

      <div className={classes.background} />
    </div>
  );
};

export default Helper;
