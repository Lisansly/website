import axios, { AxiosError, AxiosResponse } from "axios";
import { LoginPathParam } from "../components/auth/Login";

class AuthClient {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = import.meta.env.VITE_API_URL as string;
  }

  public async login(
    values: LoginPathParam
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
