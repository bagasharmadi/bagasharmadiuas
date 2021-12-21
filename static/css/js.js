var parameters = {
    target: "#plot",
    data: [{
      fn: 'sin(x)',
      color: '#1DE9B6'
    }],
    grid: true,
    xAxis: {domain: [0, 2*Math.PI]},
    yAxis: {domain: [-1,1]}
  };
  function plotCurve(){
    var fn = document.querySelector("#function").value;
    var xMin = document.querySelector("#xMin").value;
    var xMax = document.querySelector("#xMax").value;
    var yMin = document.querySelector("#yMin").value;
    var yMax = document.querySelector("#yMax").value;
    var color = document.querySelector("#color").value;
    
    parameters.data[0].fn = fn;
    parameters.xAxis.domain = [xMin, xMax];
    parameters.yAxis.domain = [yMin, yMax];
    parameters.data[0].color = color;
    
    functionPlot(parameters);
  }

  