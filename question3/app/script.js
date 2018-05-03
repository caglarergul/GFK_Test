window.onload = function() {
    var dataPoints = [];

    function getDataPointsFromCSV(csv) {
        var dataPoints = (csvLines = points = []);
        csvLines = csv.split(/[\r?\n|\r|\n]+/);

        for (var i = 0; i < csvLines.length; i++) {
            if (csvLines[i].length > 0) {
                points = csvLines[i].split(";");
                var count = 0;
                if (points[2] == "yes") {

                    dataPoints.push({
                        x: new Date(points[0]).getMonth() + 1,
                        y: Math.random() * 100
                    });

                }

            }
        }
        console.log(dataPoints);

        return dataPoints;
    }
    $.get("data.csv",
        function(data) {
            var chart = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: "Formatting Date"
                },

                data: [{
                    type: "line",
                    lineThickness: 2,
                    dataPoints: getDataPointsFromCSV(data)
                }]

            });

            chart.render();

        });


};