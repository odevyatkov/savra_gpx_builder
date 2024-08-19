export type JsonValue = string | number | boolean;

export interface JsonObject {
  [k: string]: JsonValue | JsonValue[] | JsonObject;
}

export interface JwtPayload extends JsonObject {
  iss?: string;     /** Issuer (who created and signed this token) */
  sub: string;     /** Subject (whom the token refers to) */
  aud?: string[];   /** Audience (who or what the token is intended for) */
  iat?: number;     /** Issued at (seconds since Unix epoch) */
  exp?: number;     /** Expiration time (seconds since Unix epoch) */
  azp?: string;     /** Authorization party (the party to which this token was issued) */
  scope?: string;   /** Token scope (what the token has access to) */
}
