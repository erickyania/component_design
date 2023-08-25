import Speaker from "./speaker";
import { data } from "../../SpeakerData";
const SpeakerList = ({ showsession }) => {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showsession={showsession}
            ></Speaker>
          );
        })}
      </div>
    </div>
  );
};

export default SpeakerList;
