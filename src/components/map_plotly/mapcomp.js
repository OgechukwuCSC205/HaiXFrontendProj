import Plot from "react-plotly.js";

const Plotmap = () => {

    return (
    <Plot
        data={[{
            type: 'choropleth',
            locationmode: 'country names',
            colorscale: "Blues"
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
         
      />);
}

export default Plotmap;