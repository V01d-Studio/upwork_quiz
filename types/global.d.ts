type GlobalResponse<T> = {
  success: boolean;
  errors: number[];
  data: T;
};


type AuthSchemes = typeof AuthSchemes[keyof typeof AuthSchemes];

interface HttpOptions {
  expire?: number;
  secret?: string;
}

interface JwtOptions {
  accessExpire?: number;
  refreshExpire?: number;
  secret?: string;
}

type JWTPayload = {
  id: string;
  iat: number | undefined;
  exp: number | undefined;
  type?: stgring;
};