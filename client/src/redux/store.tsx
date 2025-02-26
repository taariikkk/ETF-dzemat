import { configureStore } from "@reduxjs/toolkit";
import etfszmReducer, { InitialStateType } from "./etfdzemat";

export const store = configureStore({
  reducer: {
    etfszm: etfszmReducer,
  },
  preloadedState: loadFromSessionStorage(),
});

function loadFromSessionStorage(): { etfszm: InitialStateType } | undefined {
  try {
    const serialisedState = sessionStorage.getItem("reduxStore");
    if (serialisedState) {
      return JSON.parse(serialisedState);
    } else {
      const newReduxStore = {
        etfszm: {
          prijavljen: false,
          userInfo: {
            username: null,
            role: null,
          },
          notification: { text: "", show: false, type: undefined },
        },
      };
      return newReduxStore;
    }
  } catch (err) {
    console.warn(err);
    return undefined;
  }
}

function saveToSessionStorage(state: { etfszm: InitialStateType }) {
  try {
    const serialState = JSON.stringify(state);
    sessionStorage.setItem("reduxStore", serialState);
  } catch (e) {
    console.warn(e);
  }
}

store.subscribe(() => saveToSessionStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
