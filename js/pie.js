//grab context from canvas
    var ctx = $("#graphic").get(0).getContext("2d");

    var data = [
        {
            value: 69,
            color: "#0961AD",
            label: "Low"
        },
        {
            value: 352,
            color: "#08965D",
            label: "Moderate"
        },
        {
            value: 719,
            color: "#BF0800",
            label: "High"
        },
        {
            value: 92,
            color: "#C2CC14",
            label: "Lacking Sufficient Data"
        }
        ];

    //declare chart and modify options
     var myPie = new Chart(ctx).Pie(data, {
        maintainAspectRatio: true,
        responsive: true,
        tooltipTemplate: "<%= label %>: <%= Math.round((value /1200) * 100) + '%' %>",
       legendTemplate : "<ul class=\"legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    });

    //clear out old legend on reload
    $("#legend").empty();

    //add the legend and grab the data
    legend(document.getElementById("legend"), data)