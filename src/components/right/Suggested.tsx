import React from "react";
import listSuggested from "../../data/SuggestedForMe.json";
import Avatar from "@mui/material/Avatar";
import "./Suggested.css";

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Suggested = () => {
  const initNumberSuggested = 3;
  const shuffledList = shuffleArray(listSuggested); // Shuffle the list on component load
  const [numberSuggested, setNumberSuggested] = React.useState(initNumberSuggested);
  const [dataSuggested, setDataSuggested] = React.useState(shuffledList.slice(0, initNumberSuggested));
  const [followed, setFollowed] = React.useState(Array(listSuggested.length).fill(false));
  const [showAll, setShowAll] = React.useState(false);

  const handleShow = () => {
    setNumberSuggested(shuffledList.length);
    setShowAll(true);
  };

  const handleHide = () => {
    setNumberSuggested(initNumberSuggested);
    setShowAll(false);
  };

  React.useEffect(() => {
    setDataSuggested(shuffledList.slice(0, numberSuggested));
  }, [numberSuggested]);

  const handleFollow = (index) => {
    const newFollowed = [...followed];
    newFollowed[index] = !newFollowed[index];
    setFollowed(newFollowed);
  };

  return (
    <div>
      <div className="title-suggested">
        Suggested for you
        <span
          onClick={() => {
            numberSuggested === initNumberSuggested ? handleShow() : handleHide();
          }}
        >
          {numberSuggested === initNumberSuggested ? "See All" : "Hide"}
        </span>
      </div>
      <div className={`suggested-container ${showAll ? "show-all" : ""}`}>
        {dataSuggested.map((sgt, index) => (
          <div key={sgt.id} className="listAcc-container">
            <div className="listAcc">
              <Avatar src={sgt.avatar} />
              <div>
                <div className="userName">{sgt.userName}</div>
                <div className="rela">{sgt.relationship}</div>
              </div>
            </div>
            <div
              className="button-follow"
              onClick={() => handleFollow(index)}
            >
              {followed[index] ? "Followed" : "Follow"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggested;
