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
        e.preventDefault();
        modalTemplate.classList.add('show');
        bodyPage.classList.add('fixed');

        });

    function getElem() {
        contentInModalWindow.innerHTML = loginFormTemplate;
        return registrationButton = document.getElementById('regist-button');
    }

    function noName() {
        getElem();
        registrationButton.addEventListener('click', (e) => {
            e.preventDefault();
            contentInModalWindow.innerHTML = registrationFormTemplate;
            const loginButton = document.getElementById('login-button');
            loginButton.addEventListener('click', (e) => {
                e.preventDefault();
                contentInModalWindow.innerHTML = loginFormTemplate;
                noName();
                callFormForgotPassword();
            });
        });
    }
    noName();

    function callFormForgotPassword() {
        const modalRegistrationForgotButton = document.getElementById('modal-registration-forgot-button');
        modalRegistrationForgotButton.addEventListener('click', (e) => {
            e.preventDefault();
            contentInModalWindow.innerHTML = forgotPasswordFormTemplate;
            const forgotPasswordButton = document.getElementById('forgot-password-button');
            sendEmail(forgotPasswordButton,contentInModalWindow);
        });
    };
    callFormForgotPassword();

    modalCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalTemplate.classList.remove('show');
        bodyPage.classList.remove('fixed');
        window.location.reload();
    });
});

    const forgotPasswordFormTemplate = document.getElementById('forgot-password-form-template').innerHTML;

    function sendEmail(forgotPasswordButton, contentInModalWindow) {

        forgotPasswordButton.addEventListener('click', (e) => {
            e.preventDefault();
            const forgotPasswordEmail = document.getElementById('forgot-password-email');
            emailValidate(forgotPasswordEmail, contentInModalWindow);
        });
    }

    function emailValidate(forgotPasswordEmail, contentInModalWindow) {
        const regex = new RegExp('^[A-Za-z0-9\\.\\_\\-]+@[a-z\\.]+[a-z\\.]$');
        if (forgotPasswordEmail.value.length > 1 && forgotPasswordEmail.value !== '') {
            if (!regex.test(forgotPasswordEmail.value)) {
                console.error('email - entered forbidden symbols');
                setTimeout(()=>{
                    contentInModalWindow.innerHTML = forgotPasswordFormTemplate;
                    const forgotPasswordButton = document.getElementById('forgot-password-button');
                    sendEmail(forgotPasswordButton,contentInModalWindow);
                }, 2000);
                contentInModalWindow.innerHTML = `<p class="error-message">Wrong email format.</p>
                    <p class="error-message">Example: name@gmail.com.</p>`;
            } else {
                setTimeout(()=>{
                    window.location.reload();
                }, 2000);
                contentInModalWindow.innerHTML = `<p class="error-message">Your email successfully sent! Check your mailbox and try login again.</p>`;
            }
        } else {
            setTimeout(()=>{
                contentInModalWindow.innerHTML = forgotPasswordFormTemplate;
                const forgotPasswordButton = document.getElementById('forgot-password-button');
                sendEmail(forgotPasswordButton,contentInModalWindow);
            }, 2000);
            contentInModalWindow.innerHTML = `<p class="error-message">Enter your email.</p>`;
        }
    }