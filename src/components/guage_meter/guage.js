import React from "react";
import Plot from "react-plotly.js";
import importedData from "./../../twitter_api_response (2).json";

const Guage = () => {
  let diffOne =
    importedData["stats"]["twitter"]["timelineStats"]["timeline"][0][
      "meanSentiment"
    ];
  let diffTwo =
    importedData["stats"]["twitter"]["timelineStats"]["timeline"][1][
      "meanSentiment"
    ];

  let theta = 93.5;
  let r = 0.72;
  let x_head = r * Math.cos((Math.PI / 180) * theta);
  let y_head = r * Math.sin((Math.PI / 180) * theta);

  //   let diff = diffOne - diffTwo;
  //   console.log(diff);

  return (
    <div id="myDiv">
      <Plot
        data={[
          {
            domain: { x: [0, 1], y: [0, 1] },
            value: diffOne,
            number: { font: { size: 24 }},
            marker: { size: 28, color: "850000" },
            title: { text: "Today's mean sentiment", font:{size:20} },
            type: "indicator",
            mode: "gauge+number+delta+lines",
            delta: {
              prefix: "Delta: ",
              reference: diffTwo,
              font: { size: 15 },
            },
            gauge: {
              axis: { range: [-1, 1], tickwidth: 1, tickcolor: "red" },
              bordercolor: "white",
              steps: [
                { range: [-1, -0.6], color: "#ffa" },
                { range: [-0.6, -0.2], color: "yellow" },
                { range: [-0.2, 0.2], color: "lightgreen" },
                { range: [0.2, 0.6], color: "yellowgreen" },
                { range: [0.6, 1], color: "darkgreen" },
              ],
              bar: { color: "red", thickness: 0.1 },
            },
          },
        ]}
        layout={{
          width: 600,
          height: 400,
          
          xaxis: {
            range: [0, 1],
            showgrid: false,
            zeroline: false,
            visible: false,
          },
          yaxis: {
            range: [0, 1],
            showgrid: false,
            zeroline: false,
            visible: false,
          },
          showlegend: false,
          annotations: [
            {
              ax: 0.5,
              ay: 0,
              axref: "x",
              ayref: "y",
              x: 0.345 + x_head,
              y: y_head,
              xref: "x",
              yref: "y",
              showarrow: true,
              arrowhead: 1,
            },
          ],
          font: {
            family: "Courier New, monospace",
            size: 13,
            color: "#7f7f7f",
          },
        }}
        //   Plotly.newPlot("myDiv", data, layout);
      />
    </div>
  );
};

export default Guage;
