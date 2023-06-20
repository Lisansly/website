import { UpdateBody, UpdateResponse } from "./Types";
import axios, { AxiosError } from "axios";

class UserClient {
  private readonly apiUrl: string;

  constructor() {
    this.apiUrl = import.meta.env.VITE_API_URL as string;
  }

  public async update(values: UpdateBody): Promise<UpdateResponse> {
    try {
      const response = await axios.patch(`${this.apiUrl}/user`, values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("_auth")}`,
        },
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
}

export default UserClient;
