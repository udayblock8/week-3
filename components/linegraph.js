import React from 'react';
import Plot from 'react-plotly.js';
import { useTheme } from '@mui/material/styles'

export default function donut() {
    const theme = useTheme();
    return (
      <Plot
        data={[
            {
                x: [1, 2, 3, 4, 5, 6],
                y: [50, 40, 100, 90, 50, 150],
                type: 'scatter',
                mode: 'lines',
                line: {
                  color: theme.palette.blue,
                  width: 4
                }
            },
            {
                x: [1, 2, 3, 4, 5, 6],
                y: [80, 125, 50, 120, 95, 110],
                type: 'scatter',
                mode: 'lines',
                line: {
                  color: theme.palette.graphgray,
                  width: 4
                }
            }
        ]}
        layout={ {
            height: 170,
            margin:{
                l: 0,
                r: 20,
                t: 0,
                b: 40,
            },
            showlegend: false,
            yaxis: {
                showticklabels: false,
                tick0: 0,
                dtick: 50,
                fixedrange: true,
                nticks: 3,
                rangemode: 'tozero',
         
            },
            xaxis:{
                showgrid: false,
                showline: true,
                range: [0.9, 6.1],
                linecolor: '#E2E7E7',
                tickcolor: 'white',
                tickmode: 'array',
                tickvals: [1, 2, 3, 4, 5, 6],
                tickcolor: 'white',
                ticklen: 10,
                ticktext: ["01", "02", '03', '04', '05', '06'],
                tickfont: {
                    color: 'rgba(115, 123, 139, 0.5)',
                    family: 'Poppins'
                }
            }
          } }
        useResizeHandler={true}
        style={{width: '100%'}}
        config={{responsive: true, displayModeBar: false}}
      />
    )
}