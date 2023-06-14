type SignInPathParams = {
  email: string;
  password: string;
};

type SignUpBody = {
  name: string;
  email: string;
  password: string;
};

type SignResponse = {
  statusCode: number;
  accessToken?: string;
  refreshToken?: string;
};

type RefreshTokenPathParams = {
  refreshToken: string;
  userId: string;
};

type RefreshTokenResponse = {
  statusCode: number;
  accessToken?: string;
};

export type {
  SignInPathParams,
  SignUpBody,
  SignResponse,
  RefreshTokenPathParams,
  RefreshTokenResponse,
};
