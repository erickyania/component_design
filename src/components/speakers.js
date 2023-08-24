import { data } from "../../SpeakerData";
import SpeakerList from "./SpeakerList";
import Header from "./Header";
import SpeakerToolbar from "./speakertoolbar";
import { useState } from "react";
const Speakers = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div
      className={
        theme === "light" ? "conatiner-fluid light" : "container-fluid dark"
      }
    >
      <Header theme={theme}></Header>
      <SpeakerToolbar theme={theme} setTheme={setTheme}></SpeakerToolbar>
      <SpeakerList data={data}></SpeakerList>
    </div>
  );
};

export default Speakers;
