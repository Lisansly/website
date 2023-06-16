import { useTrail, animated } from "@react-spring/web";
import { useAuthUser } from "react-auth-kit";
import { useState, useEffect } from "react";
import Avatar from "../Avatar";
import {
  Autocomplete,
  createStyles,
  Group,
  Paper,
  Select,
  Code,
} from "@mantine/core";

const questions = [
  {
    question: "test question 1",
    answer: "test answer 1",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
    margin: theme.spacing.xl,
    borderRadius: theme.radius.lg,
    maxWidth: "450px",
    padding: theme.spacing.md,
  },
  code: {
    width: "100%",
    minHeight: "100px",
    padding: theme.spacing.sm,
    wordBreak: "break-word",
  },
}));

const Helper = () => {
  const userData = useAuthUser();
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

  const trails = useTrail(1, {
    from: { opacity: 0, x: 1000 },
    to: { opacity: 10, x: 0 },
    config: { mass: 9, tension: 1000, friction: 100 },
  });

  return (
    <>
      {trails.map((props) => (
        <animated.div style={props}>
          <Paper withBorder className={classes.card}>
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
      ))}
    </>
  );
};

export default Helper;
