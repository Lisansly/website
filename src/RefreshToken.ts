import { createRefresh } from "react-auth-kit";
import AuthClient from "./clients/auth/Client";

const refreshToken = createRefresh({
  interval: 10,
  refreshApiCallback: async ({ refreshToken, authUserState }): Promise<any> => {
    const authClient: AuthClient = new AuthClient();
    const response = await authClient.refreshToken({
      refreshToken: refreshToken || "",
      userId: authUserState?.id,
    });
    if (response.statusCode !== 200) {
      return {
        isSuccess: false,
      };
    }
    const decodedAccessToken = JSON.parse(
      atob(response.accessToken!.split(".")[1])
    );
    //const decodedRefreshToken = JSON.parse(atob(response.data.refreshToken.split(".")[1]));
    return {
      isSuccess: true,
      newAuthToken: response.accessToken,
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
