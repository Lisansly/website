import PasswordInput, { PasswordInputProps } from "../PasswordInput";
import { Paper, Container, createStyles } from "@mantine/core";
import TextInput, { TextInputProps } from "../TextInput";
import { useState } from "react";
import Button from "../Button";

type SignFormProps = {
  passwordInputs: PasswordInputProps[];
  beforeButton?: React.ReactNode;
  afterButton?: React.ReactNode;
  textInputs: TextInputProps[];
  buttonText: string;
  onSubmit: any;
  form: any;
};

const useStyles = createStyles((theme) => ({
  paper: {
    borderRadius: theme.fn.radius("lg"),
    marginTop: 100,
    padding: 30,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
  },
}));

const SignForm = (props: SignFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { classes } = useStyles();

  const onSubmit = async (values: any) => {
    setLoading(true);
    await props.onSubmit(values);
    setLoading(false);
  };

  return (
    <Container size={420} mih="100vh">
      <Paper
        onSubmit={props.form.onSubmit((values: any) => onSubmit(values))}
        className={classes.paper}
        component="form"
      >
        {props.textInputs.map((input) => (
          <TextInput
            validation={input.validation}
            placeholder={input.placeholder as string}
            label={input.label as string}
            key={input.label}
          />
        ))}
        {props.passwordInputs.map((input) => (
          <PasswordInput
            validation={input.validation}
            placeholder={input.placeholder as string}
            label={input.label as string}
            key={input.label}
          />
        ))}
        {props.beforeButton}
        <Button loading={loading} fullWidth mt="xl">
          {props.buttonText}
        </Button>
        {props.afterButton}
      </Paper>
    </Container>
  );
};

export default SignForm;
