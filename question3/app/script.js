
// Splitting and calculating cvs data table to a JSON.
function dayCalculation(csv) {
    var lines = csv.split(/\r?\n/g);

    var list = {};

    for (var i = 1, ii = lines.length; i < ii; i++) {
        var splt = lines[i].split(';');

        if (list[splt[0]]) {

            list[splt[0]] += splt[2] == "yes" ? 1 : 0;
        }
        else {
            list[splt[0]] = splt[2] == "yes" ? 1 : 0;
        }
    }
    return list;
}





// Assigning calculated csv to data points of the chart.
function getDataPointsFromCSV(csv) {

    var dataPoints = [];
    var data = {};
    data = dayCalculation(csv);

    $.each(data, function (i, val) {
        dataPoints.push({
            x: new Date(i).getMonth() + 1,
            y: val
        });
    });

    return dataPoints;
}


$(window).ready(function () {
    // Rendering chart and invoke calculation method.
    $.get("data.csv",
        function (data) {
            var chart = new CanvasJS.Chart("chartContainer", {


                data: [{
                    type: "line",
                    lineThickness: 2,
                    dataPoints: getDataPointsFromCSV(data)
                }]

            });

            chart.render();

        });


});
