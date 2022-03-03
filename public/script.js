var trace1 = {
    x: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
    y: [120, 80, 100, 75, 125, 135, 110, 80, 100, 75, 120, 170],
    type: 'bar',
    marker: {
      color: 'rgb(90, 106, 207)'
    },
    width: 0.15
  };
  
  var trace2 = {
    x: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
    y: [60, 110, 50, 100, 80, 60, 60, 110, 50, 100, 80, 60],
    type: 'bar',
    marker: {
      color: 'rgb(230, 232, 236)'
    },
    width: 0.15
  };
  
  var data = [trace1, trace2];
  
  var layout = {
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
        tickvals: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
        tickcolor: 'white',
        ticklen: 10,
        ticktext: ["01", "02", '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        tickfont: {
            color: 'rgba(115, 123, 139, 0.5)',
            family: 'Poppins'
        }
    }
  };

  var config = {responsive: true, displayModeBar: false};
  
  Plotly.newPlot('graph-1', data, layout ,config);
  
  var trace3 = {
  x: [1, 2, 3, 4, 5, 6],
  y: [50, 40, 100, 90, 50, 150],
  type: 'scatter',
  mode: 'lines',
  line: {
    color: 'rgb(90, 106, 207)',
    width: 4
  }
};

var trace4 = {
  x: [1, 2, 3, 4, 5, 6],
  y: [80, 125, 50, 120, 95, 110],
  type: 'scatter',
  mode: 'lines',
  line: {
    color: 'rgb(230, 232, 236)',
    width: 4
  }
};

var data2 = [trace3, trace4];

var layout2 = {
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
        tickvals: [01, 02, 03, 04, 05, 06],
        tickcolor: 'white',
        ticklen: 10,
        ticktext: ["01", "02", '03', '04', '05', '06'],
        tickfont: {
            color: 'rgba(115, 123, 139, 0.5)',
            family: 'Poppins'
        }
    }
  };

var config = {responsive: true, displayModeBar: false};
Plotly.newPlot('graph-2', data2, layout2, config);

var data3 = [{
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
      'rgb(90, 106, 207)',
      'rgb(133, 147, 237)',
      'rgb(199, 206, 255)'
    ]
  },
  hovermode: 'closest'
  }];

var layout3 = {
    height: 250,
    margin:{
        l: 0,
        r: 0,
        t: 40,
        b: 40,
    },
    
  showlegend: false,
 
  grid: {rows: 1, columns: 1}
};

var config = {responsive: true, displayModeBar: false};

Plotly.newPlot('donut', data3, layout3, config);
