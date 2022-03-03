import React from 'react';
import Plot from 'react-plotly.js';
import { useTheme } from '@mui/material/styles'

export default function bargraph() {
    const theme = useTheme();
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            y: [120, 80, 100, 75, 125, 135, 110, 80, 100, 75, 120, 170],
            type: 'bar',
            marker: {
              color: theme.palette.blue
            },
            width: 0.15
          },
          {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            y: [60, 110, 50, 100, 80, 60, 60, 110, 50, 100, 80, 60],
            type: 'bar',
            marker: {
              color: theme.palette.graphgray
            },
            width: 0.15
          },
        ]}
        layout={ {
          barmode: 'group',
          bargroupgap: 0.30,
          bargap:0.50,
          height: 180,
          margin:{
              l: 0,
              r: 0,
              t: 0,
              b: 30,
          },
      
          showlegend: false,
          yaxis: {
              zerolinecolor: '#E2E7E7',
          },
          xaxis:{
              tickmode: 'array',
              tickvals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
              tickcolor: 'white',
              ticklen: 10,
              ticktext: ["01", "02", '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
              tickfont: {
                  color: 'rgba(115, 123, 139, 0.5)',
                  family: 'Poppins'
              }
          }
        } }
        useResizeHandler={true}
        style={{width: "100%"}} 
        config={{responsive: true, displayModeBar: false}}
      />
    )
}