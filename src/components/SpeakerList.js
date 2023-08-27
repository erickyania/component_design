import Speaker from "./speaker";
import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";
const SpeakerList = ({ showsession }) => {
  const [speakerData, setSpeakerData] = useState([]);
  const[isloading,setIsLoading] = useEffect(true)
  const[haserrored,setHasErrored] = useEffect(false)


  const delay = (ms) => new Promise((resolve) => setTimeout((resolve, ms)));
  useEffect(() => {
    async function delayfun() {
      await delay(2000);
      setSpeakerData(data);
    }
    delayfun();
  }),[];
  function onFavoriteToggle(id) {
    const speakersRecPrevious = speakerData.find(function (rec) {
      return rec.id === id;
    });
    const speakerRecUpdated = {
      ...speakersRecPrevious,
      favorite: !speakersRecPrevious.favorite,
    };
    const speakersDataNew = speakerData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });

    setSpeakerData(speakersDataNew);
  }

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakerData.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showsession={showsession}
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id);
              }}
            ></Speaker>
          );
        })}
      </div>
    </div>
  );
};

export default SpeakerList;
