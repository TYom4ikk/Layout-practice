const form = document.getElementById(`registrationForm`);

form.addEventListener('submit', function(event){

    let isValid = true;

    //username
    const username = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    if(username.value.length<3 || username.value.length > 15){
        username.classList.add('invalid');
        usernameError.textContent = 'Имя должно быть от 3 до 15 символов.';
        isValid = false;
    }else{
        username.classList.remove('invalid');
        usernameError.textContent = '';
    }

    //email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email.value)){
        email.classList.add('invalid');
        emailError.textContent = 'Введите корректный email';
        isValid = false;
    }else{
        email.classList.remove('invalid');
        emailError.textContent = '';
    }

    //password
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if(password.value.length<3){
        password.classList.add('invalid');
        passwordError.textContent = 'Пароль должен быть не менее 8 символов';
        isValid = false;
    }else{
        password.classList.remove('invalid');
        passwordError.textContent = '';
    }


    if(!isValid){
        event.preventDefault();
    }

});