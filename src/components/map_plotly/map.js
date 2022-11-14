import React from "react";
import Plot from "react-plotly.js";
import importedData from "./../../linkedin_data_for test (2).json";

const Map = () => {
  let countries = [];
  let populationFollowers = [];

  let countryData =
    importedData["stats"]["linkedin"]["timelineStats"][
      "organisationFollowersLifetime"
    ][0]["followers_split"]["followerCountsByCountry"];

  for (let i = 0; i < countryData.length; i++) {
    countries.push(countryData[i]["countryText"]);
    populationFollowers.push(
      countryData[i]["followerCounts"]["organicFollowerCount"]
    );
  }

  //   let diff = diffOne - diffTwo;
  //   console.log(diff);

  return (
    <div id="myDiv">
      <Plot
        data={[{
            type: 'choropleth',
            locationmode: 'country names',
            locations: countries,
            z: populationFollowers,
            text: countries ,
            colorscale: "Picnic"
        }]}
        layout={{
            title: '2022 Follower count by Country',
                geo:{
                    scope: 'world',
                    draggable: false,
                    raiseondrag: false,
                    countrycolor: 'rgb(255, 255, 255)',
                    showland: true,
                    landcolor: 'rgb(217, 217, 217)',
                    showlakes: true,
                    lakecolor: 'rgb(255, 255, 255)',
                    subunitcolor: 'rgb(255, 255, 255)',
                    lonaxis: {},
                    lataxis: {}
                }
            }}
        //   Plotly.newPlot("myDiv", data, layout);
      />
    </div>
  );
};

export default Map;
