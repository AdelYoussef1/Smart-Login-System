var loginBtn = document.getElementById('loginBtn');
var loginCard = document.getElementById('loginCard');
var emailLogin = document.getElementById('emailLogin');
var passwordLogin = document.getElementById('passwordLogin');
var loginMsg = document.getElementById('loginMsg');
var login = document.getElementById ('login');
var signUpCard =document.getElementById('signUpCard');
var nameSignUp = document.getElementById('nameSignUp');
var emailSignUp = document.getElementById('emailSignUp');
var passwordSignUp = document.getElementById('passwordSignUp');
var signUpMsg = document.getElementById('signUpMsg');
var signUpBtn = document.getElementById('signUpBtn');
var signUp = document.getElementById('signUp');
var home = document.getElementById('home');
var logoutBtn = document.getElementById('logoutBtn');
var welcomeName = document.getElementById('welcomeName');



login.addEventListener('click' , showSignUp);
signUp.addEventListener('click' , showLogin);


function showSignUp() {
    loginCard.classList.add("d-none");
    loginCard.classList.remove("d-flex");
    signUpCard.classList.add("d-flex");
    signUpCard.classList.remove("d-none");
    home.classList.add("d-none");
    home.classList.remove("d-flex");
    loginMsg.innerHTML = '';
}


function showLogin() {
    loginCard.classList.add("d-flex");
    loginCard.classList.remove("d-none");
    signUpCard.classList.add("d-none");
    signUpCard.classList.remove("d-flex");
    home.classList.add("d-none");
    home.classList.remove("d-flex");
    signUpMsg.innerHTML = '';
}




var welcomeName=document.getElementById('welcomeName')
var username;
function showHome(username) {
    welcomeName.innerHTML='Welcome '
    loginCard.classList.add("d-none");
    loginCard.classList.remove("d-flex");
    signUpCard.classList.add("d-none");
    home.classList.remove("d-none");
    home.classList.add("d-flex")
    welcomeName.innerHTML+=username
}


var emailsArr;

(function () {
    if (localStorage.getItem('data') == null)
    emailsArr = [];
    else {
    emailsArr = JSON.parse(localStorage.getItem('data'));
}
})();

signUpBtn.addEventListener('click', signUpAcc);

function signUpAcc() {

        if (signUpCheck()) {
    signUpMsg.innerHTML = `<span style="color: green;">sucess</span>`;
    var account = {
        aName: nameSignUp.value,
        aEmail: emailSignUp.value,
        aPass: passwordSignUp.value
    }

    emailsArr.push(account);
    localStorage.setItem('data', JSON.stringify(emailsArr))
}

}

loginBtn.addEventListener('click', loginAcc);

function loginAcc() {
    if (loginCheck())
    showHome(username);
}

logoutBtn.addEventListener('click',function() {
emailLogin.value='';
passwordLogin.value='';
showLogin();
});

function signUpCheck() {
    var checkResult = true;

    if (nameSignUp.value == '' || emailSignUp.value == '' || passwordSignUp.value == '') {
    checkResult = false;
    signUpMsg.innerHTML = `<span style="color: red;">All inputs are required</span>`
}

    for (var i = 0; i < emailsArr.length; i++) {
    if (emailSignUp.value == emailsArr[i].aEmail) {
        checkResult = false;
        signUpMsg.innerHTML = `<span style="color: red;">email already exists</span>`
    break;
    }
}

return checkResult
}

function loginCheck() {


    if (emailLogin.value == '' || passwordLogin.value == '') {
    loginMsg.innerHTML = `<span style="color: red;">All inputs are required</span>`
    return false;
}

    for (var i = 0; i < emailsArr.length; i++) {
    if (emailLogin.value == emailsArr[i].aEmail && passwordLogin.value == emailsArr[i].aPass) {
        username=emailsArr[i].aName;
        return true;
    }
}

    loginMsg.innerHTML = `<span style="color: red;">incorrect email or password</span>`
return false;

}