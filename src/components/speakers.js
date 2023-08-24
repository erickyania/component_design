import { data } from "../../SpeakerData";
import SpeakerList from "./SpeakerList";
import Header from "./Header";
import SpeakerToolbar from "./speakertoolbar";
const Speakers = () => {
  return (
    <div className="conatiner-fluid">
        <Header></Header>
        <SpeakerToolbar></SpeakerToolbar>
      <SpeakerList data={data}></SpeakerList>
    </div>
  );
};

export default Speakers;
