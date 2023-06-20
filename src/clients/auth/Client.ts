import axios, { AxiosError } from "axios";
import {
  RefreshTokenPathParams,
  RefreshTokenResponse,
  SignInPathParams,
  SignResponse,
  SignUpBody,
} from "./Types";

class AuthClient {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = import.meta.env.VITE_API_URL as string;
  }

  public async signIn(values: SignInPathParams): Promise<SignResponse> {
    try {
      const response = await axios.get(
        `${this.apiUrl}/user/email/${values.email}/password/${values.password}`
      );
      return {
        statusCode: response.status,
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        return {
          statusCode: error.response?.status as number,
          accessToken: "",
          refreshToken: "",
        };
      }
      throw error;
    }
  }

  public async signUp(values: SignUpBody): Promise<SignResponse> {
    try {
      const response = await axios.post(`${this.apiUrl}/user`, {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      return {
        statusCode: response.status,
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        return {
          statusCode: error.response?.status as number,
          accessToken: "",
          refreshToken: "",
        };
      }
      throw error;
    }
  }

  public async refreshToken(
    values: RefreshTokenPathParams
  ): Promise<RefreshTokenResponse> {
    try {
      const response = await axios.get(
        `${this.apiUrl}/user/${values.userId}/refreshToken/${values.refreshToken}`
      );
      return {
        statusCode: response.status,
        accessToken: response.data.accessToken,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        return {
          statusCode: error.response?.status as number,
          accessToken: "",
        };
      }
      throw error;
    }
  }
}

export default AuthClient;
