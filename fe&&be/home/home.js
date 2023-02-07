let text = document.querySelector("#textArea");
let slideArea = document.querySelector(".slideArea");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let li = document.querySelectorAll(".point li");
let img = document.querySelectorAll("img");
let smallBox = document.querySelectorAll(".smallBox");
let p = document.querySelectorAll(".smallBox p");
let submit = document.querySelector("#search");
document.addEventListener('keyup' , function(e) {
    if (e.keyCode === 83) {
        text.focus();
    }
})
function check() {
    if(text.value == '') {
        return false;
    } else {
        return true;
    }
}

slideArea.addEventListener('mouseenter', function() {
    left.style.display = 'block';
    right.style.display = 'block';
    clearInterval(timer);
    timer = null;
})
slideArea.addEventListener('mouseleave', function() {
    left.style.display = 'none';
    right.style.display = 'none';
    timer = setInterval(function() {
        for(var m = 0;m < 7;m++){
        if(img[m].style.display == 'block'){
            img[m].style.display = 'none';
            li[m].style.backgroundColor = '#ffffff80';
            if(m == 6){
                img[0].style.display = 'block';
                li[0].style.backgroundColor = '#ec9578';
                break;
            } else {
                img[m+1].style.display = 'block';
                li[m+1].style.backgroundColor = '#ec9578';
                break;
            }
        }
    }
    },3000)
})
li[0].style.backgroundColor = '#ec9758';
img[0].style.display = 'block';
for(let i = 0;i < 7;i++){
    li[i].onclick = function() {
        for(let p = 0;p < 7;p++){
            li[p].style.backgroundColor = '#ffffff80';
            img[p].style.display = 'none';
        }
        li[i].style.backgroundColor = '#ec9758';
        img[i].style.display = 'block';
    }
}
left.addEventListener('click', function(){
    for(var q = 0;q < 7;q++){
        if(img[q].style.display == 'block'){
            img[q].style.display = 'none';
            li[q].style.backgroundColor = '#ffffff80';
            if(q == 0){
                img[6].style.display = 'block';
                li[6].style.backgroundColor = '#ec9578';
                break;
            } else {
                img[q-1].style.display = 'block';
                li[q-1].style.backgroundColor = '#ec9578';
                break;
            }
        }
    }
})
right.addEventListener('click', function(){
    for(var m = 0;m < 7;m++){
        if(img[m].style.display == 'block'){
            img[m].style.display = 'none';
            li[m].style.backgroundColor = '#ffffff80';
            if(m == 6){
                img[0].style.display = 'block';
                li[0].style.backgroundColor = '#ec9578';
                break;
            } else {
                img[m+1].style.display = 'block';
                li[m+1].style.backgroundColor = '#ec9578';
                break;
            }
        }
    }
})
let timer = setInterval(function() {
    for(var m = 0;m < 7;m++){
        if(img[m].style.display == 'block'){
            img[m].style.display = 'none';
            li[m].style.backgroundColor = '#ffffff80';
            if(m == 6){
                img[0].style.display = 'block';
                li[0].style.backgroundColor = '#ec9578';
                break;
            } else {
                img[m+1].style.display = 'block';
                li[m+1].style.backgroundColor = '#ec9578';
                break;
            }
        }
    }
},3000)

for (let n = 0;n < 30;n++){
    smallBox[n].addEventListener('mouseenter', function() {
        p[n].style.color = '#ed702d';
    }
)}
for (let n = 0;n < 30;n++){
    smallBox[n].addEventListener('mouseleave', function() {
        p[n].style.color = '#333';
    }
)}

// submit.addEventListener("click", async () => {
//     let word = text.value;
//     const res = await fetch("http://43.143.254.32:8080/products/sort",{
//         method:"post",
//         headers:{
//             Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4NzYyLCJ1c2VybmFtZSI6IjEyMzQ1Njc4IiwiZXhwIjoxNjc2MDI5ODg4LCJpYXQiOjE2NzU0MjUwODgsImlzcyI6IjEyNy4wLjAuMSIsInN1YiI6InVzZXIgdG9rZW4ifQ.EUjeaS9kwQeOLDWP2IOfPPZijczTFyGyKfILLeKNyLs",
//         },
//         body:{
//             keyword:word,
//         }
//     })
//     const content = await res.json();
//     console.log(content);
// })