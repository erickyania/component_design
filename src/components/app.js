import Header from "./Header";
import { useState } from "react";
import Speakers from "./speakers";
const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={
        theme === "light" ? "conatiner-fluid light" : "container-fluid dark"
      }
    >
      <Header theme={theme}></Header>
      <Speakers theme={theme} setTheme={setTheme}></Speakers>
    </div>
  );
};

export default App;
