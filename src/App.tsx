import { useState } from "react";
import Portfolio from "@/screens/Portfolio";
import "@/styles/plugin.scss";
import "@/styles/style.scss";

function App() {
  const [count, setCount] = useState(0);

  return <Portfolio />;
}

export default App;
