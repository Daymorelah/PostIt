
$(document).ready(function(){

	$('#btn-loginPage').on('click', gotoLoginPage)

	function gotoLoginPage(){
	$.ajax({
		type:'GET',
		url:'/login'
	}).done(function(data){
		$('body').html(data);
	}); //end of ajax call
	}//end of function gotologinpage

});//end of function document.ready