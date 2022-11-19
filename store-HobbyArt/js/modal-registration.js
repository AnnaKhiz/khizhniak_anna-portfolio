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
            });
        });
    }
    noName();

    modalCloseBtn.addEventListener('click', (e) => {
        modalTemplate.classList.remove('show');
        bodyPage.classList.remove('fixed');
        e.preventDefault();
    });
});