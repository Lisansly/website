import axios, { AxiosError, AxiosResponse } from "axios";
import { SignInPathParam } from "../components/auth/SignIn";

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
        `${this.apiUrl}/user/identifier/${values.identifier}/password/${values.password}`,
        {
          withCredentials: false,
        }
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
