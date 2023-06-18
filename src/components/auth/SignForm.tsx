import { Paper, Container, createStyles } from "@mantine/core";
import PasswordInput, { PasswordInputProps } from "../PasswordInput";
import TextInput, { TextInputProps } from "../TextInput";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import { useState } from "react";
import Button from "../Button";

const handleSuccess = (accessToken: string, refreshToken: string) => {
  const navigate = useNavigate();
  const signIn = useSignIn();

  const decodedAccessToken = JSON.parse(atob(accessToken.split(".")[1]));
  const decodedRefreshToken = JSON.parse(atob(refreshToken.split(".")[1]));

  signIn({
    token: accessToken,
    expiresIn: decodedAccessToken.exp,
    tokenType: "Bearer",
    refreshToken: refreshToken,
    refreshTokenExpireIn: decodedRefreshToken.exp,
    authState: {
      id: decodedAccessToken.sub,
      name: decodedAccessToken.name,
      email: decodedAccessToken.email,
    },
  });
  navigate("/");
};

type SignFormProps = {
  passwordInputs: PasswordInputProps[];
  textInputs: TextInputProps[];
  buttonText: string;
  onSubmit: any;
  form: any;
};

const useStyles = createStyles((theme) => ({
  paper: {
    borderRadius: theme.fn.radius("lg"),
    marginTop: 30,
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
        withBorder
        onSubmit={props.form.onSubmit((values: any) => onSubmit(values))}
        component="form"
        className={classes.paper}
      >
        {props.textInputs.map((input) => (
          <TextInput
            validation={props.form.getInputProps(input.key as string)}
            placeholder={input.placeholder as string}
            label={input.label as string}
            key={input.key}
          />
        ))}
        {props.passwordInputs.map((input) => (
          <PasswordInput
            validation={props.form.getInputProps(input.key as string)}
            placeholder={input.placeholder as string}
            label={input.label as string}
            key={input.key}
          />
        ))}
        <Button loading={loading} fullWidth mt="xl">
          {props.buttonText}
        </Button>
      </Paper>
    </Container>
  );
};

export default SignForm;

export { handleSuccess };
