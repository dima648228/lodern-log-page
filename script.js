const pVisibilitySwitcher = document.getElementById('password-eye-i');
const passwordInput = document.getElementById('password-value');

// Form Elements
const formHeader = document.getElementById('form-header')

const formSwitchPrefix = document.getElementById('form-switch-prefix');
const formSwitch = document.getElementById('form-switch');

const buttonSuccess = document.getElementById('button-success')
const buttonAdditional = document.getElementById('button-additional')
const buttonExtra = document.getElementById('button-extra')

// boolean
let isLogin = false

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setTextValue(element, value) {
    element.innerHTML = value;
}

async function animateElement(elementStyle, strChar,fadeTime, startValue, endValue) {
    if (startValue>endValue) {
        for (var i=startValue; i>endValue;++i) {
            elementStyle = i+strChar;
            await sleep(fadeTime)
            console.log(1)
        }
    } else {
        for (var i=startValue; i<endValue;--i) {
            elementStyle = i+strChar;
            await sleep(fadeTime)
            console.log(2)
        }
    }
}

function setMode(mode) {
    if (mode == 'login') {
        setTextValue(formHeader,"Login to your account");
        //setTextValue(formSwitchPrefix,"Don't Have An Account ? ")
        setTextValue(formSwitch,"Sign Up");

        // Changing styles
        setTextValue(buttonSuccess, "Login now")
        animateElement(buttonSuccess.style.height,"px",100,55,65)
        //buttonSuccess.style.height = "65px";
        buttonAdditional.style.visibility = 'hidden';
        buttonExtra.style.marginTop = "25%";

        isLogin = !isLogin;
    } else {

        setTextValue(formHeader,"Create an account");
        //setTextValue(formSwitchPrefix,"Already Have An Account ? ")
        setTextValue(formSwitch,"Log In");

        // Changing styles
        setTextValue(buttonSuccess, "Create account")
        animateElement(buttonSuccess.style.height,"px",100,65,55)
        //buttonSuccess.style.height = "55px";
        buttonAdditional.style.visibility = '';
        buttonExtra.style.marginTop = "40%"

        isLogin = !isLogin;
    }
}


pVisibilitySwitcher.addEventListener('click', function(e) {

    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    this.classList.toggle('fa-eye-slash');
})

formSwitch.addEventListener('click',function(e) {
    if (!isLogin) {
        setMode('login')
    } else {
        setMode('register')
    }
})