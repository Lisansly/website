import { useAuthUser } from "react-auth-kit";
import { useState, useEffect } from "react";
import Avatar from "../Avatar";
import {
  Autocomplete,
  createStyles,
  Transition,
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
    margin: theme.spacing.xs,
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
    "Hello! do you have a question?"
  );
  const [typedAnswer, setTypedAnswer] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  return (
    <Transition mounted={mounted} transition="slide-up" duration={1500}>
      {(styles) => (
        <Paper style={styles} withBorder className={classes.card}>
          <Group position="center">
            <Group position="center" spacing={"xl"}>
              <Avatar name={userData()?.name} size="100px" />
              <Select
                label="Select the category related to your question"
                data={["All", "Account"]}
                defaultValue={"All"}
                variant="filled"
                size="xs"
              />
            </Group>
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
      )}
    </Transition>
  );
};

export default Helper;
