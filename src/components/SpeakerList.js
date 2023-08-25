import Speaker from "./speaker";
import { data } from "../../SpeakerData";
import { useState } from "react";
const SpeakerList = ({ showsession }) => {
  const [speakerData,setSpeakerData] =useState(data)
  return (
    <div className="container speakers-list">
      <div className="row">
        {speakerData.map(function (speaker) {
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
