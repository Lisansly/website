import { createRefresh } from "react-auth-kit";
import AuthClient from "./clients/AuthClient";
import { AxiosError } from "axios";

const refreshToken = createRefresh({
  interval: 10,
  refreshApiCallback: async ({ refreshToken, authUserState }): Promise<any> => {
    const response = await AuthClient.refreshToken(
      refreshToken || "",
      authUserState?.id
    );
    if (response instanceof AxiosError) {
      return {
        isSuccess: false,
      };
    }
    const decodedAccessToken = JSON.parse(
      atob(response.data.accessToken.split(".")[1])
    );
    //const decodedRefreshToken = JSON.parse(atob(response.data.refreshToken.split(".")[1]));
    return {
      isSuccess: true,
      newAuthToken: response.data.accessToken,
      newAuthTokenExpireIn: decodedAccessToken.exp,
      //newRefreshToken: response.data.refreshToken,
      //newRefreshTokenExpiresIn: decodedRefreshToken.exp,
      newAuthState: {
        id: decodedAccessToken.sub,
        name: decodedAccessToken.name,
        email: decodedAccessToken.email,
      },
    };
  },
});

export default refreshToken;
