$( document ).ready(function() {
  var data = {
    labels: ["2012", "2013", "2014", "2015"],
    datasets: [
  {
    label: "My First dataset",
    fillColor: "rgba(255, 142, 64,0.2)",
    strokeColor: "rgba(255, 142, 64,1)",
    pointColor: "rgba(255, 142, 64,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: [50000, 53050, 56428.05, 63160.72]
  },
{
  label: "My Second dataset",
  fillColor: "rgba(220,220,220,0.2)",
  strokeColor: "rgba(220,220,220,1)",
  pointColor: "rgba(220,220,220,1)",
  pointStrokeColor: "#fff",
  pointHighlightFill: "#fff",
  pointHighlightStroke: "rgba(151,187,205,1)",
  data: [50000, 52950, 55428.25, 60160.53]
},
{
  label: "My third dataset",
  fillColor: "rgba(151,187,205,0.2)",
  strokeColor: "rgba(151,187,205,1)",
  pointColor: "rgba(151,187,205,1)",
  pointStrokeColor: "#fff",
  pointHighlightFill: "#fff",
  pointHighlightStroke: "rgba(151,187,205,1)",
  data: [50000, 51250, 52531.25, 53844.53]
}
]
};

  var options = {
    animation: true,
    scaleShowHorizontalLines: false,
    scaleShowVerticalLines: false,
    showScale: false,
    datasetFill : false
  };

  //Get the context of the canvas element we want to select
  var c = $('#myChart');
  var ct = c.get(0).getContext('2d');
  var ctx = document.getElementById("myChart").getContext("2d");
  /*************************************************************************/
  myNewChart = new Chart(ct).Line(data, options);

  function checkWidth(){
    var windowsize = $(window).width();
    if(windowsize < 1199) {
      $('#warning').fadeIn('fast');
    } else {
      $('#warning').hide();
    }
  }

  checkWidth();

  $(window).resize(function() {
    checkWidth();
  });
});
