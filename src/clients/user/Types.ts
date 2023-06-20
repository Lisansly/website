type UpdateBody = {
  name?: string;
  email?: string;
  password?: string;
};

type UpdateResponse = {
  statusCode: number;
  accessToken: string;
  refreshToken: string;
};

export type { UpdateBody, UpdateResponse };
