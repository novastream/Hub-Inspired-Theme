define('hub-inspired-theme:views/login', 'views/login', function (Dep) {

    return Dep.extend({

        template: 'hub-inspired-theme:login',

        setup: function () {
            Dep.prototype.setup.call(this);

            $('body').addClass('hubinspired-login');
        },
        onRemove: function () {
            $('body').removeClass('hubinspired-login');
        },		
		afterRender: function () {
            Dep.prototype.afterRender.call(this);

			$('#field-userName').focus();
			
            $('#btn-login').attr('disabled', true);
						
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
        data: function () {
            return{        
              logoSrc: this.getLogoSrc(),
              showForgotPassword: this.getConfig().get('passwordRecoveryEnabled'),
              applicationName: this.getConfig().get('applicationName')
           };          
        }

    });
});