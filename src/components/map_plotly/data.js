import React from "react";

export default class FetchData extends React.Component {
  state = {
    loading: true,
    map: null,
  };

  async componentDidMount() {
    const url =
      "file:///C:/Users/DELL/Documents/HaiX/Frontend/speedometer-map/src/twitter_api_response%20(2).json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      map: data.stats.linkedin.timelineStats.organisationFollowersLifetime[0]
        .followers_split.followerCountsByCountry,
      loading: false,
    });
    // let countries = this.state.map
    // let populationFollowers = [];

    // for (let i = 0; i < map.length; i++) {
    //   countries.push(map[i]["countryText"]);
    //   populationFollowers.push(
    //     countryData[i]["followerCounts"]["organicFollowerCount"]
    //   );
    // }
  }

  // render() {
  //     return (
  //         <div>

  //         </div>
  //     )
  // }
}
