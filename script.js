(function()
{
  // instantiate a moment object
  var NowMoment = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

  // display value of moment object in #displayMoment div
  var eDisplayMoment = document.getElementById('displayMoment');
  eDisplayMoment.innerHTML = NowMoment;
  
})();