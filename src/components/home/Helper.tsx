import { useAuthUser } from "react-auth-kit";
import { useState, useEffect } from "react";
import Avatar from "../Avatar";
import {
  Autocomplete,
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

const Helper = () => {
  const userData = useAuthUser();
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
        <Paper style={styles} p="md" withBorder maw="450px" radius="lg" m="xs">
          <Group position="center">
            <Avatar name={userData()?.name} size="100px" />
            <Select
              sx={(theme) => ({
                [theme.fn.largerThan("xs")]: {
                  marginLeft: theme.spacing.lg,
                },
              })}
              label="Select the category related to your question"
              data={["All", "Account"]}
              defaultValue={"All"}
              variant="filled"
              size="xs"
            />
            <Code
              sx={{ wordBreak: "break-word" }}
              color={"blue"}
              w={"100%"}
              mih={100}
              p={"sm"}
            >
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
