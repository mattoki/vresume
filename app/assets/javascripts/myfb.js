// JS Script

(function($, window, document, undefined) {
	//var profileContain = $('#profile_contain'),
	//	profileName = $('#profile_name').find('p');
	
	meFunc = function() {
		FB.api('/me', function(response) {
			console.log(response);
		});
		FB.api('/me/posts', function(response) {
			console.log(response);
		});
	}
	
	displayProfile = function() {
		FB.api('/me', function(response) {
			var picUrl = 'https://graph.facebook.com/' + response.id + '/picture',
				userUrl = 'https://graph.facebook.com/' + response.id;
			//profileContain.fadeIn();
			//$('img').attr('src', picUrl);
			//profileName.text(response.name + response.email);
			console.log('profile loaded');
		});
	}
	
	hideProfile = function() {
		//profileContain.hide();
		//profileName.text('');
		console.log('profile hidden');
	}

	isFbLoggedIn = function() {
		FB.getLoginStatus(function(response) {
			console.log(response);
		    if (response.status === 'connected') {
		        return true;
		    } else if (response.status === 'not_authorized') {
		        return false;
		        login();
		    } else {
		        return false;
		        login();
		    }
		});
	}
	
})(jQuery, window, document);