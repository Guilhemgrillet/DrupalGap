$('#drupalgap_page_user_login').live('pageshow',function(){
  try {
	  if (drupalgap.user.uid != 0) {
		  navigator.notification.alert(
				  'Already logged in!',
				  function(){},
				  'Error',
				  'OK'
		  );
		  $.mobile.changePage("dashboard.html");
	  }
  }
  catch (error) {
	  if (drupalgap.settings.debug) {
		  console.log("drupalgap_page_user_login - " + error);
	  }  
  }
});

$('#user_login_submit').live('click',function() {
	try {
	  // Get name and password, validate them.
	  var name = $('#name').val();
	  var pass = $('#pass').val();
	  if (!name) { alert('Please enter your user name.'); return false; }
	  if (!pass) { alert('Please enter your password.'); return false; }
	  drupalgap.services.user.login.call({
		  'name':name,
		  'pass':pass,
		  'success':function(){
			  $.mobile.changePage("dashboard.html");
		  },
	  });
	}
	catch (error) {
		if (drupalgap.settings.debug) {
			console.log('user_login_submit - ' + error);
		}
	}
	return false;
});