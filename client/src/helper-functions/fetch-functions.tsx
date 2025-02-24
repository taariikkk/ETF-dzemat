import axios from "axios";
import { getAxiosErrorObject } from "./error-functions";
import { Registracija } from "../main-components/Registracija";

interface AxiosMessage {
  status: number;
  message: string;
}
interface LoginMessage extends AxiosMessage {
  username: string;
}
export interface Prijava {
  usernameEmail: string | undefined;
  password: string | undefined;
}

export const signup = async (user: Registracija) => {
  try {
    const res = await axios.post<AxiosMessage>(`/api/signup`, user);
    return res.data;
  } catch (err) {
    return getAxiosErrorObject(err);
  }
};

export const login = async (user: Prijava) => {
  try {
    const res = await axios.post<LoginMessage>(`/api/login`, user, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    return getAxiosErrorObject(err);
  }
};

export const signout = async () => {
  try {
    const res = await axios.get<AxiosMessage>("/api/signout");
    return res.data;
  } catch (err) {
    return getAxiosErrorObject(err);
  }
};

export const checkLoggedIn = async () => {
  try {
    const res = await axios.get<AxiosMessage>(`/api/check-login`);
    return res.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
