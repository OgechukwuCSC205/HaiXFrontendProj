import React from "react";
import Plot from "react-plotly.js";
import importedData from "./../../twitter_api_response (2).json";
import importedData2 from "./../../facebook_sentiment.json";

const Guage = () => {
  let diffOne =
    importedData["stats"]["twitter"]["timelineStats"]["timeline"][0][
      "meanSentiment"
    ];
  let diffTwo =
    importedData["stats"]["twitter"]["timelineStats"]["timeline"][1][
      "meanSentiment"
    ];

    let diffOne1 =
    importedData2["stats"]["facebook"]["timelineStats"]["timeline"][0][
      "meanSentiment"
    ];
  let diffTwo1 =
    importedData2["stats"]["facebook"]["timelineStats"]["timeline"][1][
      "meanSentiment"
    ];


  //   let diff = diffOne - diffTwo;
  //   console.log(diff);

  return (
    <div id="myDiv">
      <Plot
        data={[
          {
            domain: { row: 0, column: 0},
            value: diffOne,
            number: { font: { size: 45 }},
            marker: { size: 28, color: "850000" },
            title: { text: "Today's Twitter mean sentiment", font:{size:23} },
            type: "indicator",
            mode: "gauge+number+delta+lines",
            delta: {
              prefix: " Delta: ",
              reference: diffTwo,
              font: { size: 20 },
            },
            gauge: {
              axis: { range: [-1, 1], tickwidth: 1, tickcolor: "red" },
              bordercolor: "black",
              steps: [ {range: [-1, -0.6], color: "#ffa"},
              {range: [-0.6, -0.2], color: "yellow"},
              {range: [-0.2, 0.2], color: "yellowgreen"}, 
              {range: [0.2, 0.6], color: "lightgreen"},
              {range: [0.6, 1], color: "green"}      ],
              bar: { color: "brown", thickness: 0.1},
            }
          },
            {
              domain: { row: 0, column: 1 },
              value: diffOne1,
              number: { font: { size: 45 }},
              marker: { size: 28, color: "850000" },
              title: { text: "Today's Facebook mean sentiment", font:{size:23} },
              type: "indicator",
              mode: "gauge+number+delta+lines",
              delta: {
                prefix: " Delta: ",
                reference: diffTwo1,
                font: { size: 20 },
              },
              gauge: {
                axis: { range: [-1, 1], tickwidth: 1, tickcolor: "red" },
                bordercolor: "black",
                grid: { columns: 2, pattern: "independent" },
                steps: [ {range: [-1, -0.6], color: "#ffa"},
                {range: [-0.6, -0.2], color: "yellow"},
                {range: [-0.2, 0.2], color: "yellowgreen"}, 
                {range: [0.2, 0.6], color: "lightgreen"},
                {range: [0.6, 1], color: "green"}      ],
                bar: { color: "brown", thickness: 0.1},
              },
              
            }
          
        ]}
        layout={{
          width: 1200,
          height: 700,
          grid: { rows: 1, columns: 2, pattern: "independent" },
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
