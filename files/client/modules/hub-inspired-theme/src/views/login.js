define('hub-inspired-theme:views/login', 'views/login', function (Dep) {

    return Dep.extend({

        // specify your custom template
        template: 'hub-inspired-theme:login',

        setup: function () {
            // calling parent setup method, you can omit it
            Dep.prototype.setup.call(this);

            // add custom class to body during login
            $('body').addClass('hubinspired-login');
        },
        onRemove: function () {

            // remove custom class from body
            $('body').removeClass('hubinspired-login');
        },		
		afterRender: function () {
			// calling parent setup method, you can omit it
            Dep.prototype.afterRender.call(this);
			
			// disable submit button
            $('#btn-login').attr('disabled', true);
			
			// username key down and change event
			$('#field-userName').on('keydown', function() {
				if ($(this).val().length >= 2 && $('#field-password').val().length >= 2) {
					$('#btn-login').attr('disabled', false);
				} else {
					$('#btn-login').attr('disabled', true);
				}
			}).on('change', function() {
				if ($(this).val().length >= 2 && $('#field-password').val().length >= 2) {
					$('#btn-login').attr('disabled', false);
				} else {
					$('#btn-login').attr('disabled', true);
				}
			});
			
			// password key down and change event
			$('#field-password').on('keydown', function() {
				if ($(this).val().length >= 2 && $('#field-userName').val().length >= 2) {
					$('#btn-login').attr('disabled', false);
				} else {
					$('#btn-login').attr('disabled', true);
				}
			}).on('change', function() {
				if ($(this).val().length >= 2 && $('#field-userName').val().length >= 2) {
					$('#btn-login').attr('disabled', false);
				} else {
					$('#btn-login').attr('disabled', true);
				}
			});
			
			// hide and show password link click event
			$('#link-showhide-password').on('click', function(event) {
				event.preventDefault();
				
				if ($('#field-password').attr('type') == 'password') {
					$(this).text('Hide password');
					$('#field-password').attr('type', 'text');
				} else {
					$(this).text('Show password');
					$('#field-password').attr('type', 'password');
				}
			});
		 },

        // include the custom values in the standard "data" function which will provide the placeholder values to the template
        // the values for "logoSrc" and "showForgotPassword" are the standard values specified in the core login script
        data: function () {
            return{        
              logoSrc: this.getLogoSrc(),
              showForgotPassword: this.getConfig().get('passwordRecoveryEnabled'),
              applicationName: this.getConfig().get('applicationName')
           };          
        }

    });
});