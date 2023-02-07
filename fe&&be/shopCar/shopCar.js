let check = document.querySelectorAll(".check");
check[0].addEventListener('click', function() {
    for(let m = 0;m < check.length;m++) {
        check[m].checked = this.checked;
    }
    })
check[check.length - 1].addEventListener('click', function() {
    for(let m = 0;m < check.length;m++) {
        check[m].checked = this.checked;
    }
})
for(let q = 1;q < check.length - 1;q++) {
    check[q].onclick = getall;
}
function getall() {
    var count = 0;
    for(let p = 1;p < check.length - 1;p++) {
        if(check[p].checked == true) {
            count++;
        }
        if(count == check.length - 2) {
            check[0].checked = true;
            check[check.length - 1].checked = true;
        }
        if(this.checked == false) {
            check[0].checked = false;
            check[check.length - 1].checked = false;
        }
    }
}

let blank = document.querySelector(".blank");
let shopArea = document.querySelector(".shopArea");
let deleteAll = document.querySelector(".deleteAll");
let contentArea = document.querySelectorAll(".contentArea");
deleteAll.addEventListener('click', function() {
    if(check[1].checked == true) {
        contentArea[0].style.display = 'none';
        totalText[0].innerHTML = "¥0.00";
        let allPrice = Number(totalText[0].innerHTML.slice(1)) + Number(totalText[1].innerHTML.slice(1));
        all.innerHTML = "¥" + allPrice + ".00";
    }
    if(check[2].checked == true) {
        contentArea[1].style.display = 'none';
        totalText[1].innerHTML = "¥0.00";
        let allPrice = Number(totalText[0].innerHTML.slice(1)) + Number(totalText[1].innerHTML.slice(1));
        all.innerHTML = "¥" + allPrice + ".00";
    }
    if(check[1].checked == true && check[2].checked == true) {
        shopArea.style.display = 'none';
        blank.style.display = 'block';
    }
})

let operation = document.querySelectorAll("#operation a");
let text = document.querySelectorAll(".innerText");
for(let i = 0;i <= 2;i+=2){
    operation[i].addEventListener('click', function() {
        if(i == 0){
            localStorage.setItem('items1', text[0].innerHTML);
        }
        if(i == 2){
            localStorage.setItem('items2', text[1].innerHTML);
        }
    })
}
for(let j = 1;j <= 3;j+=2){
    operation[j].addEventListener('click', function() {
        if(j == 1){
            contentArea[0].style.display = 'none';
        }
        if(j == 3){
            contentArea[1].style.display = 'none';
        }
        if(contentArea[0].style.display == 'none' && contentArea[1].style.display == 'none'){
            shopArea.style.display = 'none';
            blank.style.display = 'block';
        }
    })
}

let number = document.querySelectorAll("#numberArea input");
let priceText = document.querySelectorAll(".priceText");
let onePrice1 = priceText[0].innerHTML.slice(1);
let onePrice2 = priceText[1].innerHTML.slice(1);
let totalText = document.querySelectorAll(".totalText");
let all = document.querySelector(".number");
let minusOrAdd = document.querySelectorAll("#numberArea a");
number[0].addEventListener('keyup',function() {
    totalText[0].innerHTML = "¥" + number[0].value * onePrice1 + ".00";
})
number[1].addEventListener('keyup',function() {
    totalText[1].innerHTML = "¥" + number[1].value * onePrice2 + ".00";
})
window.addEventListener('keyup', function() {
    let allPrice = Number(totalText[0].innerHTML.slice(1)) + Number(totalText[1].innerHTML.slice(1));
    all.innerHTML = "¥" + allPrice + ".00";
})
for(let x = 1;x <= 3;x += 2){
    minusOrAdd[x].addEventListener("click", function() {
        if(x == 1){
            number[0].value = Number(number[0].value) + 1;
            totalText[0].innerHTML = "¥" + number[0].value * onePrice1 + ".00";
        }
        if(x == 3){
            number[1].value = Number(number[1].value) + 1;
            totalText[1].innerHTML = "¥" + number[1].value * onePrice2 + ".00";
        }
        let allPrice = Number(totalText[0].innerHTML.slice(1)) + Number(totalText[1].innerHTML.slice(1));
        all.innerHTML = "¥" + allPrice + ".00";
    })
}
for(let y = 0;y <= 2;y +=2){
    minusOrAdd[y].addEventListener("click", function() {
        if(y == 0){
            if(Number(number[0].value) > 0){
                number[0].value = Number(number[0].value) - 1;
                totalText[0].innerHTML = "¥" + number[0].value * onePrice1 + ".00";
            } else {
                number[0].value = 0;
            }
        }
        if(y == 2){
            if(Number(number[1].value) > 0){
                number[1].value = Number(number[1].value) - 1;
                totalText[1].innerHTML = "¥" + number[1].value * onePrice2 + ".00";
            } else {
                number[1].value = 0;
            }
        }
        let allPrice = Number(totalText[0].innerHTML.slice(1)) + Number(totalText[1].innerHTML.slice(1));
        all.innerHTML = "¥" + allPrice + ".00";
    }
)}