import axios from "axios";

export type ErrorObject = {
  code: number | undefined;
  error: string;
};

export function getErrorMessage(res: ErrorObject | undefined) {
  if (res) return res.error;
  else return "Something went wrong";
}

export function getAxiosErrorObject(err: unknown) {
  if (axios.isAxiosError(err)) {
    const errorObject: ErrorObject = {
      code: err.response?.status,
      error: err.response?.data || err.response?.statusText,
    };
    return errorObject;
  } else return undefined;
}
