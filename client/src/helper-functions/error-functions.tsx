import axios from "axios";

export type ErrorObject = {
  code: number | undefined;
  error: {
    error: string;
  };
};

export function getErrorMessage(res: ErrorObject | undefined) {
  if (res) {
    const poruka = res.error.error;
    if (poruka.includes("Username")) return "Koriničko ime već postoji";
    else if (poruka.includes("Email")) return "Korisnik sa unesenim emailom već postoji";
    else return "Desila se interna greška obrade zahtjeva, molimo pokušajte ponovo.";
  } else return "Desila se interna greška obrade zahtjeva, molimo pokušajte ponovo.";
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
