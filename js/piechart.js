
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

      var options = { //width: 800, // $('#chart_div').width() or window.innerWidth
                        height: 300,
                        pieHole: 0.5,
                        pieSliceText: 'none',
                        fontName: 'Karla',
                        legend: {position: 'bottom', maxLines: 5, textStyle: {color: 'black', fontSize: 16}},
                        tooltip: {trigger:'none', text: 'percentage', showColorCode:true},
                        colors:['#7CB342','#FFEB3B','#FF3D00','#4FC3F7','#BDBDBD']
                      };

      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }