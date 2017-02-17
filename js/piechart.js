
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
                        height: 350,
                        pieHole: 0.5,
                        backgroundColor: '#F8F8F8',
                        pieSliceText: 'none',
                        fontName: 'Karla',
                        legend: 'none',//{position: 'bottom', maxLines: 5, textStyle: {color: 'black', fontSize: 16}},
                        tooltip: { isHtml: 'true', text: 'percentage', showColorCode:true}, //trigger:'none',
                        colors:['#14A697','#F2C12E','#F29D35','#F25252','#BDBDBD']
                      };

      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

      chart.draw(data, options);



      /////////////////


                  google.visualization.events.addListener(chart, 'select', selectHandler);

            function selectHandler(e) {
              alert('Selected');
            }
    }

