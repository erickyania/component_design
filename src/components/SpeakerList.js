import Speaker from "./speaker";
import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";
const SpeakerList = ({ showsession }) => {
  const [speakerData, setSpeakerData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [haserrored, setHasErrored] = useState(false);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout((resolve, ms)));
  useEffect(() => {
    async function delayfun() {
      try {
        await delay(2000);
        setIsLoading(false);
        setSpeakerData(data);
      } catch (e) {
        setIsLoading(false);
        setHasErrored(true);
        setError(e);
      }
    }
    delayfun();
  }),
    [];
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
  if (haserrored === true)
    return (
      <div className="text-danger">
        Error:<b>Loading speaker data failed{error}</b>
      </div>
    );
  if (isloading === true) return <div>Loading...</div>;
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
