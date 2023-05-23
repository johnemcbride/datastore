import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "@fontsource/josefin-sans";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import awsconfig from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import { Authenticator } from "@aws-amplify/ui-react";
import { Hub, DataStore } from "aws-amplify";

Hub.listen("auth", (data) => {
  switch (data.payload.event) {
    case "signIn":
      console.log("user signed in");
      DataStore.clear();
      break;
    case "signUp":
      console.log("user signed up");
      break;
    case "signOut":
      console.log("user signed out");
      DataStore.clear();
      break;
    case "signIn_failure":
      console.log("user sign in failed");
      break;
    case "configured":
      console.log("the Auth module is configured");
  }
});
Amplify.configure(awsconfig);

const myTheme = JSON.parse(JSON.stringify(studioTheme));
myTheme.tokens.fonts = {
  default: {
    variable: { value: "Josefin Sans, sans-serif" },
    static: { value: "Josefin Sans, sans-serif" },
  },
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <Authenticator>
        {({ signOut, user }) => <App user={user} />}
      </Authenticator>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
