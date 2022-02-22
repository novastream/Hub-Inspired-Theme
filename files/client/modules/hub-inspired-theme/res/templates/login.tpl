<div class="auth">
    <div class="auth-container">
        <div class="card">
            <header class="auth-header">
                <h1 class="auth-title">
                    <div class="logo">
                        <img src="{{logoSrc}}" class="logo">
                    </div>
                </h1>
            </header>
            <div class="auth-content">
                <form id="login-form" onsubmit="return false;">
                    <div class="form-group">
                        <label for="field-username">{{translate 'Username'}}</label>
                        <input type="text" name="username" id="field-userName" class="form-control" autocapitalize="off" autocorrect="off" tabindex="1" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="password">{{translate 'Password'}}</label>
                        <input type="password" name="password" id="field-password" class="form-control" tabindex="2" autocomplete="current-password">
                    </div>
                    <div class="form-group">
                        {{#if showForgotPassword}}<a href="javascript:" data-action="passwordChangeRequest" class="forgot-btn pull-right">{{translate 'Forgot Password?' scope='User'}}</a>{{/if}}
                    </div>
                    <div class="form-group">
                        <button type="submit" id="btn-login" class="btn btn-block btn-primary">
                            <span>{{translate 'Login' scope='User'}}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="copyright text-center">
            © 2022 EspoCRM All rights reserved.<br>
            <a href="https://www.espocrm.com/" target="_blank">EspoCRM</a>
        </div>
    </div>
</div>