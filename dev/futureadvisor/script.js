$( document ).ready(function() {
  var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
  {
    label: "My First dataset",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [0, 2, 3, 4, 5, 8]
  },
{
  label: "My Second dataset",
  fillColor: "rgba(151,187,205,0.2)",
  strokeColor: "rgba(151,187,205,1)",
  pointColor: "rgba(151,187,205,1)",
  pointStrokeColor: "#fff",
  pointHighlightFill: "#fff",
  pointHighlightStroke: "rgba(151,187,205,1)",
  data: [0, 1, 2, 3, 4, 5]
}
]
};

  var options = {
    animation: true,
    scaleShowHorizontalLines: false,
    scaleShowVerticalLines: false,
    showScale: false,
    showTooltips: false
  };

  //Get the context of the canvas element we want to select
  var c = $('#myChart');
  var ct = c.get(0).getContext('2d');
  var ctx = document.getElementById("myChart").getContext("2d");
  /*************************************************************************/
  myNewChart = new Chart(ct).Line(data, options);
});
