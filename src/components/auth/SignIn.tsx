import { signInFunctionParams } from "react-auth-kit/dist/types";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useForm, isNotEmpty, isEmail } from "@mantine/form";
import { SignInPathParams } from "../../clients/auth/Types";
import { PasswordInputProps } from "../PasswordInput";
import AuthClient from "../../clients/auth/Client";
import { TextInputProps } from "../TextInput";
import { Group, Text } from "@mantine/core";
import Notification from "../Notification";
import { useSignIn } from "react-auth-kit";
import SignForm from "./SignForm";

type handleSuccessProps = {
  response: {
    accessToken: string;
    refreshToken: string;
  };
  navigate: NavigateFunction;
  signIn: (signInConfig: signInFunctionParams) => boolean;
};

const handleSuccess = (props: handleSuccessProps) => {
  const { accessToken, refreshToken } = props.response;
  const decodedAccessToken = JSON.parse(atob(accessToken.split(".")[1]));
  const decodedRefreshToken = JSON.parse(atob(refreshToken.split(".")[1]));

  props.signIn({
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
  props.navigate("/");
};

const SignIn = () => {
  const notification = new Notification();
  const authClient = new AuthClient();
  const navigate = useNavigate();
  const signIn = useSignIn();

  const form = useForm<SignInPathParams>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isEmail("Email must be valid"),
      password: isNotEmpty("Password is required"),
    },
    validateInputOnChange: true,
  });

  const textInputs: TextInputProps[] = [
    {
      placeholder: "example@mail.com",
      validation: form.getInputProps("email"),
      label: "Email",
    },
  ];

  const passwordInputs: PasswordInputProps[] = [
    {
      placeholder: "Your password",
      validation: form.getInputProps("password"),

      label: "Password",
    },
  ];

  const onSubmit = async (values: SignInPathParams) => {
    var response = await authClient.signIn(values);
    if (response.statusCode !== 200) {
      notification.error(
        response.statusCode === 400
          ? "Wrong email or password"
          : "Please try again later"
      );
    } else {
      handleSuccess({ response, signIn, navigate });
    }
  };

  return (
    <SignForm
      passwordInputs={passwordInputs}
      textInputs={textInputs}
      buttonText="Sign In"
      onSubmit={onSubmit}
      form={form}
      afterButton={
        <Group mt={"md"}>
          <Text size={"xs"} ml={"auto"}>
            <a href="/">Forgot your password?</a>
          </Text>
        </Group>
      }
    />
  );
};

export default SignIn;
export { handleSuccess };
