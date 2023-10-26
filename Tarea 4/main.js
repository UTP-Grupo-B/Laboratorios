function login() {
    const username = document.getElementById('username').value;
    const passwordInput = document.getElementById('password');
    const UserInput = document.getElementById('username');
    const loadingAnimation = document.querySelector('.loading-animation');
    const mcqueenAnimation = document.querySelector('.mcqueen-animation');
    const errorAnimation = document.querySelector('.error-animation');
    const audio = document.getElementById('animation-audio');
    const audioerror = document.getElementById('audio-error');

    loadingAnimation.style.display = 'flex';
    passwordInput.classList.remove('invalid'); 
    UserInput.classList.remove('invalid');

    setTimeout(function () {  
        if (username === 'rayo' && passwordInput.value === 'mcqueen') {
            loadingAnimation.style.display = 'none';
            mcqueenAnimation.style.display = 'flex';
            audio.play();
            setTimeout(function () {
                mcqueenAnimation.style.display = 'none';
                audio.pause();
            }, 6000);
        } else {
            loadingAnimation.style.display = 'none';
            errorAnimation.style.display = 'flex';
            audioerror.play();
            passwordInput.classList.add('invalid');
            UserInput.classList.add('invalid'); 
            setTimeout(function () {
                errorAnimation.style.display = 'none';
                audioerror.pause();
            }, 5000);
        }
    }, 5000);
}


const showPasswordIcon = document.getElementById('show-password');
const hidePasswordIcon = document.getElementById('hide-password');
const passwordInput = document.getElementById('password');

showPasswordIcon.addEventListener('click', function () {
    passwordInput.type = 'text';
    showPasswordIcon.style.display = 'none';
    hidePasswordIcon.style.display = 'block';
});

hidePasswordIcon.addEventListener('click', function () {
    passwordInput.type = 'password';
    showPasswordIcon.style.display = 'block';
    hidePasswordIcon.style.display = 'none';
});
