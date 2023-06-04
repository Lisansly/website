import axios, { AxiosError, AxiosResponse } from "axios";
import { LoginBody } from "./Login";

class Client {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = import.meta.env.VITE_API_URL as string;
  }

  public async login(body: LoginBody): Promise<AxiosResponse | AxiosError> {
    try {
      const response = await axios.post(this.apiUrl + "user", body);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error;
      }
      throw error;
    }
  }
}

export default new Client();
