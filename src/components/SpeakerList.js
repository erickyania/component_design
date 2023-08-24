import Speaker from "./speaker";
const SpeakerList = ({ data }) => {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map(function (speaker) {
          return <Speaker key={speaker.id} speaker={speaker}></Speaker>;
        })}
      </div>
    </div>
  );
};

export default SpeakerList;
