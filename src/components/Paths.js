import { Routes, Route} from "react-router-dom";

import { Login } from "./noauthenticate/Login";
import { MainLayout } from "./authenticate/MainLayout";

import { signIn, openNotification } from "../lib/auth.js";

import { exit } from "../lib/auth"

export const Paths = ({isAuthenticate}) => {
  return (
    <Routes>
      {isAuthenticate?
      <Route path="/" element={<MainLayout exit={exit} />} />
    :<Route path="/" element={<Login signIn={signIn} openNotification={openNotification} />} />}
    </Routes>
  )
}
