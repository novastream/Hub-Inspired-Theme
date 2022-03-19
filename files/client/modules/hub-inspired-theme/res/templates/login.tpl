<div class="auth">
    <div class="auth-container">
        <div class="card">
            <header class="auth-header">
				<div class="row">
					<div class="col-md-4 logo-wrapper">
						<div class="logo">
							<img src="client/modules/hub-inspired-theme/lib/img/undraw_access_account_re_8spm.svg" class="logo">
						</div>
					</div>
					<div class="col-md-6 title-wrapper">
						<h1 class="auth-title">
							{{applicationName}}
						</h1>
					</div>
				</div>
            </header>
            <div class="auth-content">
                <form id="login-form" onsubmit="return false;">
                    <div class="form-group">
                        <label for="field-username">{{translate 'Username'}}</label>
                        <input type="text" name="username" id="field-userName" class="form-control" autocapitalize="off" autocorrect="off" tabindex="1" autocomplete="off">
                    </div>
                    <div class="form-group">
                        <label for="password">{{translate 'Password'}}</label>
						<small>(<a href="#" id="link-showhide-password">Show password</a>)</small>
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