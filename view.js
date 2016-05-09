var viewFunctions = {};

viewFunctions.handleAboutClick = function() {
  $('.tab').on('click', function(e) {
    $('section:first').toggle();
  });
};

viewFunctions.handleHomeClick = function() {
  $('.hometab').on('click', function(e) {
    $('section:first').show();
    $('.tab-content').show();
  });
};

$(document).ready(function() {
  viewFunctions.handleAboutClick();
  viewFunctions.handleHomeClick();
});
