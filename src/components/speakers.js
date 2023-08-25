import SpeakerToolbar from "./speakertoolbar";
import SpeakerList from "./SpeakerList";
import { useState } from "react";
const Speakers = ({  theme, setTheme }) => {
  const [showSession, setShowSession] = useState(true);
  return (
    <>
      <SpeakerToolbar
        theme={theme}
        setTheme={setTheme}
        showSession={showSession}
        setShowSession={setShowSession}
      ></SpeakerToolbar>
      <SpeakerList showSession={showSession}></SpeakerList>
    </>
  );
};

export default Speakers;
