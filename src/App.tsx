import React, { useState } from "react";
import Routes from "./Routes";
import { currentUser } from "./Api/firebase/auth";
import SignIn from "./Routers/Signin";

function App() {
  const [login, setLogin] = useState(false);
  currentUser(setLogin);
  return login === false ? <SignIn></SignIn> : <Routes></Routes>;
}

export default App;
