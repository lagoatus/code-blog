var viewFunctions = {};
// NOTE: If the About link is clicked first on a fresh load the like will display
// the correct content. However, clicking home through the toggle sequence off. Tomorrow will
// add if statements to check hide/show status.
viewFunctions.handleAboutClick = function() {
  $('.tab-content').hide(); // hiding About content so that I can toggle to show on toggle at correc time.
  $('.tab').on('click', function(e) {
    $('section:first').toggle();
    $('.tab-content').toggle();
  });
};

viewFunctions.handleHomeClick = function() {
  $('.hometab').on('click', function(e) {
    $('section:first').toggle();
    $('.tab-content').show();
  });
};


$(document).ready(function() {
  viewFunctions.handleAboutClick();
  viewFunctions.handleHomeClick();
});
