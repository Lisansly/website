import { SignInPathParam } from "../components/auth/SignIn";
import axios, { AxiosError, AxiosResponse } from "axios";
import { SignUpBody } from "../components/auth/SignUp";

class AuthClient {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = import.meta.env.VITE_API_URL as string;
  }

  public async signIn(
    values: SignInPathParam
  ): Promise<AxiosResponse | AxiosError> {
    try {
      const response = await axios.get(
        `${this.apiUrl}/user/email/${values.email}/password/${values.password}`
      );
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error;
      }
      throw error;
    }
  }

  public async signUp(values: SignUpBody): Promise<AxiosResponse | AxiosError> {
    try {
      const response = await axios.post(`${this.apiUrl}/user`, {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error;
      }
      throw error;
    }
  }

  public async refreshToken(
    refreshToken: string,
    userId: string
  ): Promise<AxiosResponse | AxiosError> {
    try {
      const response = await axios.get(
        `${this.apiUrl}/user/${userId}/refreshToken/${refreshToken}`
      );
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error;
      }
      throw error;
    }
  }
}

export default new AuthClient();
