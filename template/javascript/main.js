
$(document).ready(function(){

	$('#btn-loginPage').on('click', gotoLoginPage);
	//$('input').on('focus',clearInputFields);

	function gotoLoginPage(){
	$.ajax({
		type:'GET',
		url:'/login'
	}).done(function(data){
		$('body').html(data);
	}); //end of ajax call
	}//end of function gotologinpage

	function clearInputFields(){
		$('input').val('');
	};//end of function clearInputFields

});//end of function document.ready