define('hub-inspired-theme:views/login', 'views/login', function (Dep) {

    return Dep.extend({

        // specify your custom template
        template: 'hub-inspired-theme:login',

        setup: function () {
            // calling parent setup method, you can omit it
            Dep.prototype.setup.call(this);

            $('body').addClass('hubinspired-login');
        },
        onRemove: function () {
            $('body').removeClass('hubinspired-login');
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