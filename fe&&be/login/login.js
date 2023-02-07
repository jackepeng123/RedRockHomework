let account = document.querySelector("#account");
let pwd = document.querySelector("#pwd");
let container = document.querySelectorAll(".all");
let alert = document.querySelector(".alert");
let alertText = document.querySelector(".alertText");
let submit = document.querySelector(".submit");
let Delete = document.querySelectorAll(".delete");
account.value = localStorage.getItem("username");
account.onfocus = function() {
    this.placeholder = '';
    container[0].style.backgroundImage = "url(../images/account2.png)";
}
account.onblur = function() {
    this.placeholder = '用户名';
    container[0].style.backgroundImage = "url(../images/account1.png)";
}
account.onkeyup = function() {
    Delete[0].style.display = 'block';
}
pwd.onfocus = function() {
    this.placeholder = '';
    container[1].style.backgroundImage = "url(../images/pwd2.png)";
}
pwd.onblur = function() {
    this.placeholder = '密码';
    container[1].style.backgroundImage = "url(../images/pwd1.png)";
}
pwd.onkeyup = function() {
    Delete[1].style.display = 'block';
}
submit.onclick = () => {
    if(account.value == '') {
        alert.style.display = 'block';
        alertText.innerHTML = '请输入用户名!';
    } else if(pwd.value == ''){
        alert.style.display = 'block';
        alertText.innerHTML = '请输入8-20位密码';
    }
}
function judge() {
    if(account.value == '' || pwd.value == '') {
        return false;
    } else if(account.length < 6 || pwd.length < 8) {
        return false;
    } else {
        setTimeout(function() {
            location.replace('../home/home.html')
        },2000);
        return true;
    }
}
Delete[0].onclick = () => {
    account.value = '';
    Delete[0].style.display = 'none';
}
Delete[1].onclick = () => {
    pwd.value = '';
    Delete[1].style.display = 'none';
}