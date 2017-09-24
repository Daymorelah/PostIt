
$('document').ready(() => {
  //$('input').on('focus',clearInputFields);
  function gotoLoginPage() {
    $.ajax({
      type: 'GET',
      url: '/login'
    }).done((data) => {
      $('body').html(data);
    }); // end of ajax call
  }// end of function gotologinpage

  $('#btn-loginPage').on('click', gotoLoginPage);
}); // end of function document.ready

