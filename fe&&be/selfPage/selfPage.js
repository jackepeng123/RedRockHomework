// let file = document.querySelector(".selfArea input");
// file.onchange = async (e) => {
//     let Img = e.target.files[0];
//     let formData = new FormData();
//     formData.append("aimImg", Img);
//     let res = await fetch("http://127.0.0.1:5500/selfPage/selfPage.html" , {
//         method:"post",
//         body: formData,
//     })
//     let text = await res.text();
//     console.log(text);
// }
let name = document.querySelector(".name");
let allName = localStorage.getItem("username");
let visibleName1 = allName.slice(0, 3);
let visibleName2 = allName.slice(-2);
let formArea = document.querySelector(".formArea");
name.innerHTML = visibleName1 + "****" + visibleName2;

let myAddress = document.querySelector(".selfArea a");
let curtain = document.querySelector(".curtain");
let save = document.querySelector(".save");
let cancel = document.querySelector(".cancel");
myAddress.addEventListener('click', function () {
    formArea.style.display = 'block';
    curtain.style.opacity = '0.5';
    this.style.cursor = 'default';
})
let close = document.querySelector(".close");
close.addEventListener('click', function () {
    formArea.style.display = 'none';
    curtain.style.opacity = '1';
    myAddress.style.cursor = 'pointer';
})
save.addEventListener('click', function () {
    if(buyerInput.value != '' && phoneInput.value !=  '' && addressInput.value != ''){
        formArea.style.display = 'none';
        curtain.style.opacity = '1';
        myAddress.style.cursor = 'pointer';
    } else {
        alert('请完善信息');
    }
    if(check.checked == true){
        let address = addressInput.value;
        localStorage.setItem("default", address);
    }
    content[0].innerHTML = localStorage.getItem("address");
})
cancel.addEventListener('click', function() {
    formArea.style.display = 'none';
    curtain.style.opacity = '1';
    myAddress.style.cursor = 'pointer';
})

let already = document.querySelector(".already");
let add = document.querySelector(".add");
let alreadyArea = document.querySelector(".alreadyArea");
let addArea = document.querySelector(".addArea");
already.addEventListener('click', function() {
    already.style.color = '#ed702d';
    already.style.backgroundColor = 'white';
    alreadyArea.style.display = 'block';
    add.style.color = '#333';
    add.style.backgroundColor = '#eee';
    addArea.style.display = 'none';
})
add.addEventListener('click', function() {
    add.style.color = '#ed702d';
    add.style.backgroundColor = 'white';
    addArea.style.display = 'block';
    already.style.color = '#333';
    already.style.backgroundColor = '#eee';
    alreadyArea.style.display = 'none';
})

let content = document.querySelectorAll(".alreadyArea div");
let buyerInput = document.querySelector(".buyer input");
let phoneInput = document.querySelector(".phone input");
let addressInput = document.querySelector(".address input");
let check = document.querySelector(".ifDefault input");
buyerInput.onblur = function() {
    let buyer = buyerInput.value;
    if(this.value != '') {
        localStorage.setItem("buyer", buyer);
    }
}
addressInput.onblur = function() {
    let address = addressInput.value;
    if(this.value != '') {
        localStorage.setItem("address", address);
    }
}

let careText = document.querySelectorAll(".careText");
if(localStorage.getItem("items1") == null){
    careText[0].style.display = 'none';
    careText[1].style.top = '60px';
}
if(localStorage.getItem("items2") == null){
    careText[1].style.display = 'none';
}
if(localStorage.getItem("items1") != null){
    careText[0].innerHTML = localStorage.getItem("items1");
}
if(localStorage.getItem("items2") != null){
    careText[1].innerHTML = localStorage.getItem("items2");
}

let balanceNumber = document.querySelector(".balanceNumber");
let money = document.querySelector(".money");
let virtual = document.querySelector(".virtual");
virtual.addEventListener('click', function() {
    let balance = Number(money.value) + Number(balanceNumber.innerHTML.slice(1));
    balanceNumber.innerHTML = "¥" + balance + ".00";
    localStorage.setItem("balance", balance);
})
balanceNumber.innerHTML = "¥" + Number(localStorage.getItem("balance")) + ".00";