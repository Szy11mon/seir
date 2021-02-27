var started = 0;
var counter = 0;
var paused = 0
var susceptible = [];
var exposed = [];
var infectious = [];
var recovered = [];
var xVal = 0;
var days = 0;
var net_size = 100

var machine = new Array(net_size);
for (var i = 0; i < machine.length; i++) {
  machine[i] = new Array(net_size);
}
for (var i = 0; i < machine.length; i++) {
	for (var j = 0; j < machine[i].length; j++){
		machine[i][j] = 0;
	}
}


async function start() {
	paused = 0
	started = 1
	document.getElementById('start').disabled = true
	var infected = document.getElementById("Infected").value
	var p = document.getElementById("Transmission").value
	var q = document.getElementById("Recovery").value
	var r = document.getElementById("Incubation").value
	while (infected > 0){
		var i = Math.floor(Math.random()*net_size)
		var j = Math.floor(Math.random()*net_size)
		if (machine[i][j] == 0){
			machine[i][j] = 2;
			infected--;
		}
	draw();
	}
		while(1){
			if(paused || !started)
				break;
			else{
				await new Promise(r => setTimeout(r, 800));
			var temp_machine = []
			for(var i = 0; i < machine.length; i++){
				temp_machine[i] = machine[i].slice();
			}
				// var str = document.getElementById('machine').innerHTML;
				var str = '<br>';
			    for (i = 0; i < machine.length; i++){
			    	for (j = 0; j < machine[i].length; j++){
	    				if(machine[i][j] == 1){
	    					if(Math.random() < r){
	    						machine[i][j] = 2
	    					}
	    				}
	    				if(machine[i][j] == 2){
	    					if(Math.random() < q){
	    						machine[i][j] = 3
	    					}
	    				}
			    		if(i == 0){
			    			if(j == 0){
			    				if(machine[i][j] == 0){
			    					var counter = 0;
			    					if(temp_machine[0][1] == 1 || temp_machine [0][1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[1][0] == 1 || temp_machine [1][0] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[1][1] == 1 || temp_machine [1][1] == 2){
			    						counter += 1;
			    					}
			    					var probability = 1 - Math.pow(1 - p, counter)
			    					if(Math.random() < probability){
			    						machine[i][j] = 1
			    					}
			    				}
			    			}
			    			if(j == 99){
			    				if(machine[i][j] == 0){
			    					var counter = 0;
			    					if(temp_machine[0][98] == 1 || temp_machine [99][98] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[1][99] == 1 || temp_machine [98][99] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[1][98] == 1 || temp_machine [98][98] == 2){
			    						counter += 1;
			    					}
			    					var probability = 1 - Math.pow(1 - p, counter)
			    					if(Math.random() < probability){
			    						machine[i][j] = 1
			    					}
			    				}
			    			}
			    			else{
			    				if(machine[i][j] == 0){
			    					var counter = 0;
			    					if(temp_machine[i][j + 1] == 1 || temp_machine [i][j + 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i][j - 1] == 1 || temp_machine [i][j - 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i + 1][j + 1] == 1 || temp_machine [i + 1][j + 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i + 1][j] == 1 || temp_machine [i + 1][j] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i + 1][j - 1] == 1 || temp_machine [i + 1][j - 1] == 2){
			    						counter += 1;
			    					}
			    					var probability = 1 - Math.pow(1 - p, counter)
			    					if(Math.random() < probability){
			    						machine[i][j] = 1
			    					}
			    				}
			    			}
			    		}
			    		else if(i == 99){
			    			if(j == 0){
			    				if(machine[i][j] == 0){
			    					var counter = 0;
			    					if(temp_machine[99][1] == 1 || temp_machine [0][1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[98][0] == 1 || temp_machine [1][0] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[98][1] == 1 || temp_machine [1][1] == 2){
			    						counter += 1;
			    					}
			    					var probability = 1 - Math.pow(1 - p, counter)
			    					if(Math.random() < probability){
			    						machine[i][j] = 1
			    					}
			    				}
			    			}
			    		    if(j == 99){
			    				if(machine[i][j] == 0){
			    					var counter = 0;
			    					if(temp_machine[98][98] == 1 || temp_machine [99][98] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[98][99] == 1 || temp_machine [98][99] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[99][98] == 1 || temp_machine [98][98] == 2){
			    						counter += 1;
			    					}
			    					var probability = 1 - Math.pow(1 - p, counter)
			    					if(Math.random() < probability){
			    						machine[i][j] = 1
			    					}
			    				}
			    		    }
			    		    else{
			    				if(machine[i][j] == 0){
			    					var counter = 0;
			    					if(temp_machine[i][j + 1] == 1 || temp_machine [i][j + 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i][j - 1] == 1 || temp_machine [i][j - 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i - 1][j + 1] == 1 || temp_machine [i - 1][j + 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i - 1][j] == 1 || temp_machine [i - 1][j] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i - 1][j - 1] == 1 || temp_machine [i - 1][j - 1] == 2){
			    						counter += 1;
			    					}
			    					var probability = 1 - Math.pow(1 - p, counter)
			    					if(Math.random() < probability){
			    						machine[i][j] = 1
			    					}
			    				}
			    		    }
			    		}
			    		else{
			    			if(j == 0){
			    				if(machine[i][j] == 0){
			    					var counter = 0;
			    					if(temp_machine[i + 1][j] == 1 || temp_machine[i + 1][j] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i - 1][j] == 1 || temp_machine[i - 1][j] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i][j + 1] == 1 || temp_machine[i][j + 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i + 1][j + 1] == 1 || temp_machine[i + 1][j + 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i - 1][j + 1] == 1 || temp_machine[i - 1][j + 1] == 2){
			    						counter += 1;
			    					}
			    					var probability = 1 - Math.pow(1 - p, counter)
			    					if(Math.random() < probability){
			    						machine[i][j] = 1
			    					}
			    				}
			    			}
			    			else if(j == 99){
			    				if(machine[i][j] == 0){
			    					var counter = 0;
			    					if(temp_machine[i + 1][j] == 1 || temp_machine[i + 1][j] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i - 1][j] == 1 || temp_machine[i - 1][j] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i][j - 1] == 1 || temp_machine[i][j - 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i + 1][j - 1] == 1 || temp_machine[i + 1][j - 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i - 1][j - 1] == 1 || temp_machine[i - 1][j - 1] == 2){
			    						counter += 1;
			    					}
			    					var probability = 1 - Math.pow(1 - p, counter)
			    					if(Math.random() < probability){
			    						machine[i][j] = 1
			    					}
			    				}
			    			}
			    			else{
			    				if(machine[i][j] == 0){
			    					var counter = 0;
			    					if(temp_machine[i - 1][j - 1] == 1 || temp_machine[i - 1][j - 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i - 1][j] == 1 || temp_machine[i - 1][j] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i - 1][j + 1] == 1 || temp_machine[i - 1][j + 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i][j - 1] == 1 || temp_machine[i][j - 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i][j + 1] == 1 || temp_machine[i][j + 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i + 1][j - 1] == 1 || temp_machine[i + 1][j - 1] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i + 1][j] == 1 || temp_machine[i + 1][j] == 2){
			    						counter += 1;
			    					}
			    					if(temp_machine[i + 1][j + 1] == 1 || temp_machine[i + 1][j + 1] == 2){
			    						counter += 1;
			    					}
			    					var probability = 1 - Math.pow(1 - p, counter)
			    					if(Math.random() < probability){
			    						machine[i][j] = 1
			    					}
			    				}
			    			}
			    		} 
			    	}
			    }
			    for (i = 0; i < machine.length; i++){
			    	for (j = 0; j < machine[i].length; j++){
				    	
				    	if(machine[i][j] == '0')
				        	str += '<font size="2px" color="blue">&#9724</font>';
				        else if(machine[i][j] == '1')
				        	str += '<font size="2px" color="red">&#9724</font>'
				        else if(machine[i][j] == '2')
				        	str += '<font size="2px" color="black">&#9724</font>'
				        else
				        	str += '<font size="2px" color="yellow">&#9724</font>'
				    }
				    str += '<p style="margin:-7px;"></p>'
				}
			    if(started)
			    	document.getElementById('machine').innerHTML = str	
			    days += 1;
				document.getElementById('day').innerHTML = 'Day: ' + days.toString(10);	
			}
		}
	
}

function reset() {
	for (var i = 0; i < machine.length; i++) {
		for (var j = 0; j < machine[i].length; j++){
			machine[i][j] = 0;
		}
	}
	days = 0;
	started = 0
	counter = 0
	paused = 1
	susceptible.length = 0
	exposed.length = 0
	infectious.length = 0
	recovered.length = 0
	xVal = 0
	document.getElementById('start').disabled = false
	document.getElementById('machine').innerHTML = ''
	document.getElementById('chartContainer').innerHTML = ''
}

function pause() {
	paused = 1
	document.getElementById('start').disabled = false
}

function draw() {

var chart = new CanvasJS.Chart("chartContainer", {
  title :{
    text: "Distribution"
  },
  axisY: {
    includeZero: false
  },      
  data: [{
    type: "line",
    dataPoints: susceptible,
    color: "blue",
    name: "susceptible",
	showInLegend: true
  },
  {
  	type: "line",
    dataPoints: exposed,
    color: "red",
    name: "exposed",
	showInLegend: true
  },
  {
  	type: "line",
    dataPoints: infectious,
    color: "black",
    name: "infected",
	showInLegend: true
  },
    {
  	type: "line",
    dataPoints: recovered,
    color: "yellow",
    name: "recovered",
	showInLegend: true
  }]
});

// var dataLength = 20; // number of dataPoints visible at any point

var updateChart = function update() {

	if(!started)
		chart.clear()

	if(!paused){
    var susceptible_count = 0;
    var exposed_count = 0;
    var infectious_count = 0;
    var recovered_count = 0;
	for(var k = 0; k < net_size; k++){
		for(var l = 0; l < net_size; l++){
	    	if(machine[k][l] == 0)
	        	susceptible_count++;
	    	if(machine[k][l] == 1)
	        	exposed_count++;
	    	if(machine[k][l] == 2)
	        	infectious_count++;
	    	if(machine[k][l] == 3)
	        	recovered_count++;
    	}
	}
	susceptible.push({
      x: Math.round(days),
      y: susceptible_count
    });
    exposed.push({
      x: Math.round(days),
      y: exposed_count
    });
    infectious.push({
      x: Math.round(days),
      y: infectious_count
    });
    recovered.push({
      x: Math.round(days),
      y: recovered_count
    });
    xVal+= 1;

  // if (zeros.length > dataLength*runs) {
  //   zeros.shift();
  //   ones.shift();
  //   twos.shift();
  // }

  chart.render();
};
}

setInterval(function(){updateChart()}, 900);

}