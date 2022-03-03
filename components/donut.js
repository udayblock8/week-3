import React from 'react';
import Plot from 'react-plotly.js';
import { useTheme } from '@mui/material/styles'

export default function donut() {
    const theme = useTheme();
    return (
      <Plot
        data={[
            {
                values: [1890,1512,1328],
                labels: ["Afternoon", "Evening", "Morning"],
                hole: .7,
                textinfo: 'none',
                text: ["<b>Afternoon</b> <br>1pm - 4pm", "<b>Evening</b> <br>4pm - 8pm", "<b>Morning</b> <br>9am - 1pm"],
                hovertemplate: ' %{text}<br> %{value} <extra></extra>',
                
                type: 'pie',
                direction: 'clockwise',
                marker: {
                  colors: [
                    theme.palette.blue,
                    'rgb(133, 147, 237)',
                    'rgb(199, 206, 255)'
                  ]
                },
                hovermode: 'closest'
            }
        ]}
        layout={ {
            height: 250,
            margin:{
                l: 0,
                r: 0,
                t: 40,
                b: 40,
            },
            
          showlegend: false,
         
          grid: {rows: 1, columns: 1}
        } }
        useResizeHandler={true}
        style={{width: "100%"}} 
        config={{responsive: true, displayModeBar: false}}
      />
    )
}