import React from "react";
import Plotmap from "./mapcomp";

const Map = () => {
  

  // let countryData =
  //   importedData["stats"]["linkedin"]["timelineStats"][
  //     "organisationFollowersLifetime"
  //   ][0]["followers_split"]["followerCountsByCountry"];

  // for (let i = 0; i < countryData.length; i++) {
  //   countries.push(countryData[i]["countryText"]);
  //   populationFollowers.push(
  //     countryData[i]["followerCounts"]["organicFollowerCount"]
  //   );
  // }

  //   let diff = diffOne - diffTwo;
  //   console.log(diff);

  return (
    <div id="myDiv">
      <Plotmap />
    </div>
  );
};

export default Map;
