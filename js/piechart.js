
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Occupation');
        data.addColumn('number', 'Hours');
        data.addRows([
          ['Engineering Student', 29],
          ['Barista', 11],
          ['Musician', 10],
          ['Nerd', 4],
          ['Other', 4] //58
        ]);

        // Set chart options
        var options = { //width: 800, // $('#chart_div').width() or window.innerWidth
                        height: 300,
                        pieHole: 0.5,
                        pieSliceText: 'none',
                        fontName: 'Karla',
                        legend: {position: 'bottom', maxLines: 5, textStyle: {color: 'black', fontSize: 16}},
                        tooltip: {trigger:'none', text: 'percentage', showColorCode:true},
                        colors:['#7CB342','#FFEB3B','#FF3D00','#4FC3F7','#BDBDBD']
                      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));


        ////////////////////////////
        // The select handler. Call the chart's getSelection() method
        function selectHandler() {
          var selectedItem = chart.getSelection()[0];
          if (selectedItem) {
            var value = data.getValue(selectedItem.row, selectedItem.column);
            alert('The user selected ' + value);
          }
        }

        // Listen for the 'select' event, and call my function selectHandler() when
        // the user selects something on the chart.
        google.visualization.events.addListener(chart, 'select', selectHandler);
        /////////////////////////


        chart.draw(data, options);
      }