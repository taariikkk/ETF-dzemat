export {};

declare module "express-serve-static-core" {
  interface Request {
    userId: string;
    role: string;
    cookieDate: number | undefined;
    user: UserType;
  }
}
