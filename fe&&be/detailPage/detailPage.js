let smallImg = document.querySelector(".smallImg");
let mask = document.querySelector(".mask");
let bigImg = document.querySelector(".bigImg");
smallImg.addEventListener('mouseover', function() {
    mask.style.display = 'inline-block';
    bigImg.style.display = 'inline-block';
})
smallImg.addEventListener('mouseout', function() {
    mask.style.display = 'none';
    bigImg.style.display = 'none';
})
smallImg.addEventListener('mousemove', function(e) {
    let x =  e.pageX - this.offsetLeft + 1;
    let y =  e.pageY - this.offsetTop + 1;
    let maskX = x - mask.offsetWidth / 2;
    let maskY = y - mask.offsetHeight / 2;
    let max = smallImg.offsetWidth - mask.offsetWidth;
    if (maskX <= 0 ){
        maskX = 0;
    } else if (maskX >= max){
        maskX = max; 
    }
    if (maskY <= 0 ){
        maskY = 0;
    } else if (maskY >= max){
        maskY = max; 
    }
    mask.style.left = maskX + 'px';
    mask.style.top = maskY + 'px';
    let bigX = maskX * 2;
    let bigY = maskY * 2;
    bigImg.style.backgroundPositionX = - bigX + 'px';
    bigImg.style.backgroundPositionY = - bigY + 'px';
})

let details = document.querySelector(".details");
let comment = document.querySelector(".comment");
let detailsPage = document.querySelector(".detailsPage");
let commentPage = document.querySelector(".commentPage");
details.addEventListener('click', function() {
    details.style.color = '#f60';
    details.style.backgroundColor = 'white';
    details.style.border = '1px solid #f60';
    comment.style.color = '#222';
    comment.style.backgroundColor = '#f7f7f7';
    comment.style.border = 'none';
    commentPage.style.display = 'none';
    detailsPage.style.display = 'block';
})
comment.addEventListener('click', function() {
    comment.style.color = '#f60';
    comment.style.backgroundColor = 'white';
    comment.style.border = '1px solid #f60';
    details.style.color = '#222';
    details.style.backgroundColor = '#f7f7f7';
    details.style.border = 'none';
    detailsPage.style.display = 'none';   
    commentPage.style.display = 'block';
})


let title = document.querySelector(".title");
let care = document.querySelector(".care");
care.addEventListener('click', function(){
    localStorage.setItem("items1", title.innerHTML);
})