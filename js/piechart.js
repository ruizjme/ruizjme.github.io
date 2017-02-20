// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawSheetName); 

function drawSheetName() {
  
  var query = new google.visualization.Query(
            'https://docs.google.com/spreadsheets/d/186MEQTg6n7N1y0xktvxaySYgb2M3N8PgnoaJeHVeqjk/gviz/tq?range=A1:B6');
  
  query.send(handleSampleDataQueryResponse);
}

function handleSampleDataQueryResponse(response) {

  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();

  // 'Library' of colours for both states.
  var colors = {    rest: ['#14A697','#F2C12E','#F29D35','#F25252','#BDBDBD'], 
                    hover:['#12897A','#D6A52B','#D68432','#D84C4C','#BBBBBB']   }

  // Match the table's row index to each class.
  var rows = ['.eng-student', '.auto-espresso', '.music','.nerd','.other']

  var options = { //width: 800,                   // $('#chart_div').width() or window.innerWidth
                    height: 350,
                    pieHole: 0.5,
                    fontName: 'Karla',
                    backgroundColor: '#F8F8F8',
                    pieSliceText: 'none',
                    legend: 'none',               // {position: 'bottom', maxLines: 5, textStyle: {color: 'black', fontSize: 16}},
                    tooltip: { trigger:'none', text: 'percentage', showColorCode:true}, // trigger:'none'
                    colors: colors['rest']
                    };

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

  // Handle mouse hover on slices and links.
  google.visualization.events.addListener(chart, 'onmouseover', overHandler);
  google.visualization.events.addListener(chart, 'onmouseout', outHandler);

  function overHandler(gglEvent) {
    $(rows[gglEvent.row]).css('background', colors['rest'][gglEvent.row]);
    $(rows[gglEvent.row]).css('border-bottom', '5px solid'+colors['hover'][gglEvent.row]);
  }

  function outHandler(gglEvent) {
    $(rows[gglEvent.row]).css('background', '');
    $(rows[gglEvent.row]).css('border-bottom', '');
  }

  chart.draw(data, options);
}

