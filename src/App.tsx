import React, { useState } from "react";
import Routes from "./Routes";
import { currentUser } from "./Api/firebase/auth";
import SignIn from "./Routers/Signin";


function App() {
  const [login, setLogin] = useState(false);
  currentUser(setLogin);
  return (
    <div>
  {login === false ? <SignIn></SignIn> : <Routes></Routes>}
  </div>
  )
}

export default App;
