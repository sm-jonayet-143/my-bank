import { useState } from "react";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? <Dashboard /> : <Login onLogin={() => setLoggedIn(true)} />;
}

export default App;
