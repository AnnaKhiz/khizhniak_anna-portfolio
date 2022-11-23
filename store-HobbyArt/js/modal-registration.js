document.addEventListener('DOMContentLoaded', function(){
    const modalTemplate = document.getElementById('modal');
    const modalCloseBtn = document.getElementById('closeModal');
    const modalCallBtn = document.getElementById('callModal');
    const contentInModalWindow = document.getElementById('scroll-on-content');
    const loginFormInnerContent = document.getElementById('login-inner-content');
    const loginFormTemplate = document.getElementById('login-form-template').innerHTML;
    const registrationFormTemplate = document.getElementById('regist-form-template').innerHTML;
    const bodyPage = document.getElementById('body');
    let registrationButton;

    modalCallBtn.addEventListener('click',(e)=>{
        modalTemplate.classList.add('show');
        bodyPage.classList.add('fixed');
        e.preventDefault();
        });

    function getElem() {
        contentInModalWindow.innerHTML = loginFormTemplate;
        return registrationButton = document.getElementById('regist-button');
    }

    function noName() {
        getElem();
        registrationButton.addEventListener('click', (e) => {
            contentInModalWindow.innerHTML = registrationFormTemplate;
            const loginButton = document.getElementById('login-button');
            e.preventDefault();
            loginButton.addEventListener('click', (e) => {
                contentInModalWindow.innerHTML = loginFormTemplate;
                e.preventDefault();
                noName();
                callFormForgotPassword();
            });
        });
    }
    noName();

    function callFormForgotPassword() {
        const modalRegistrationForgotButton = document.getElementById('modal-registration-forgot-button');
        modalRegistrationForgotButton.addEventListener('click', (e) => {
            contentInModalWindow.innerHTML = forgotPasswordFormTemplate;
            const forgotPasswordButton = document.getElementById('forgot-password-button');
            sendEmail(forgotPasswordButton,contentInModalWindow);
            e.preventDefault();
        });
    };
    callFormForgotPassword();

    modalCloseBtn.addEventListener('click', (e) => {
        modalTemplate.classList.remove('show');
        bodyPage.classList.remove('fixed');
        window.location.reload();
        e.preventDefault();
    });
});

    const forgotPasswordFormTemplate = document.getElementById('forgot-password-form-template').innerHTML;

    function sendEmail(forgotPasswordButton, contentInModalWindow) {
        forgotPasswordButton.addEventListener('click', (e) => {
            const forgotPasswordEmail = document.getElementById('forgot-password-email');
            if (forgotPasswordEmail.value !== '') {
                setTimeout(()=>{
                    window.location.reload();
                }, 2000);
                contentInModalWindow.innerHTML = `<p class="error-message">Your email successfully sent! Check your mailbox and try login again.</p>`;
            } else {
                setTimeout(()=>{
                    contentInModalWindow.innerHTML = forgotPasswordFormTemplate;
                    const forgotPasswordButton = document.getElementById('forgot-password-button');
                    sendEmail(forgotPasswordButton,contentInModalWindow);
                }, 2000);
                contentInModalWindow.innerHTML = `<p class="error-message">Enter your email.</p>`;
            }
            e.preventDefault();
        });
    }

