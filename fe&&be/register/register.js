let account = document.getElementById('account');
let pwd = document.getElementById('pwd');
let repwd = document.getElementById('repwd');
let alert = document.querySelectorAll('.alert');
let right = document.querySelectorAll('.right');
account.onfocus = function() {
    alert[0].innerHTML = '';
    this.placeholder= '';
    right[0].style.background = 'none';
}
account.onblur = function() {
    this.placeholder='请输入6~16位字符';
    if (this.value == "") {
        alert[0].innerHTML = '您输入的账户不能为空!';
    } else if (this.value.length < 6) {
        alert[0].innerHTML = '您输入的账户过短!';
    } else {
        alert[0].innerHTML = '';
        right[0].style.background = 'url(../images/right.png)';
        localStorage.setItem("username", account.value);
    }
}
pwd.onfocus = function() {
    alert[1].innerHTML = '';
    this.placeholder= '';
    right[1].style.background = 'none';
}
pwd.onblur = function() {
    this.placeholder='请输入密码';
    if (this.value == "") {
        alert[1].innerHTML = '您输入的密码不能为空!';
    } else if (this.value.length < 8) {
        alert[1].innerHTML = '您输入的密码过短!';
    } else {
        alert[1].innerHTML = '';
        right[1].style.background = 'url(../images/right.png)';
    }
}
repwd.onfocus = function() {
    alert[2].innerHTML = '';
    this.placeholder= '';
    right[2].style.background = 'none';
}
repwd.onblur = function() {
    this.placeholder='请再次输入密码';
    if (this.value == "") {
        alert[2].innerHTML = '您输入的密码不能为空!';
    } else if (this.value != pwd.value) {
        alert[2].innerHTML = '您再次输入的密码有误!';
    } else {
        alert[2].innerHTML = '';    
        right[2].style.background = 'url(../images/right.png)';
    }
}
function judge() {
    if(account.value == '' || pwd.value == '' || repwd.value == '') {
        return false;
    } else if(account.length < 6 || pwd.length < 8) {
        return false;
    } else if(pwd.value != repwd.value) {
        return false;
    } else {
        setTimeout(function() {
            location.replace('../login/login.html');
        },2000);
        return true;
    }
}