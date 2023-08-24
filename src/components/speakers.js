import { data } from "../../SpeakerData";
import Speaker from "./speaker";
const Speakers = () => {
  return (
    <div className="conatiner-fluid">
      <SpeakerList data={data}></SpeakerList>
    </div>
  );
};

export default Speakers;
