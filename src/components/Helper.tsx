import { Autocomplete, Group, Paper, Code, Select } from "@mantine/core";
import Avatar from "./Avatar";
import { useAuthUser } from "react-auth-kit";
import { useState, useEffect } from "react";

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
    <Paper p="md" withBorder w={"450px"} radius={"lg"}>
      <Group position="center">
        <Avatar username={userData()?.name} size="100px" />
        <Select
          size="xs"
          sx={(theme) => ({
            [theme.fn.largerThan("xs")]: {
              marginLeft: theme.spacing.lg,
            },
          })}
          defaultValue={"All"}
          data={["All", "Account"]}
          label="Select the category related to your question"
          variant="filled"
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
          w={"100%"}
          placeholder="Write your question"
          data={questions.map((question) => question.question)}
          onChange={(value) => {
            const question = questions.find(
              (question) => question.question === value
            );
            setAnswer(question?.answer || "...");
            setTypedAnswer("");
          }}
        />
      </Group>
    </Paper>
  );
};

export default Helper;
