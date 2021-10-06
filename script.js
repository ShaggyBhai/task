function changeBgColor(color){
    const cont = document.querySelector('body');
    cont.style.background = color;
}
// function layer1(anything){
//     document.querySelector('#layer1').src=anything;
// }
// function layer2(anything){
//     document.querySelector('#layer2').src=anything;
// }
function sliderL(number){
    const sliderL = document.querySelector('.content1');
    sliderL.style.left = number;
}
function sliderR(number){
    const sliderR = document.querySelector('.content2');
    sliderR.style.left = number;
}
function slider3(number){
    const slider3 = document.querySelector('.content3');
    slider3.style.left = number;
}
function slider4(number){
    const slider4 = document.querySelector('.content4');
    slider4.style.left = number;
}
function slider5(number){
    const slider5 = document.querySelector('.content5');
    slider5.style.left = number;
}
function slider6(number){
    const slider6 = document.querySelector('.content6');
    slider6.style.left = number;
}
function text1(number){
    const text1 = document.querySelector('.text1');
    text1.style.top = number;
}
function text2(number){
    const text2 = document.querySelector('.text2');
    text2.style.top = number;
}
function text3(number){
    const text3 = document.querySelector('.text3');
    text3.style.top = number;
}
function text4(number){
    const text4 = document.querySelector('.text4');
    text4.style.top = number;
}
function text5(number){
    const text5 = document.querySelector('.text5');
    text5.style.top = number;
}
function text6(number){
    const text6 = document.querySelector('.text6');
    text6.style.top = number;
}
function blackScreen(array) {
     const blackScreen = document.querySelector('.blackScreen');
     blackScreen.style.visibility = array;
}



let scroller = document.getElementById("scroller");
scroller.addEventListener("mousedown", function() {
    window.scrollBy({top: 500, behavior: 'smooth'});
});
scroller.addEventListener("drag", function() {
    window.scrollBy({top: -40, behavior: 'smooth'});
});



// function scrollDown() {
//     window.scrollBy({top: 30, behavior: 'smooth'});

//    }
// document.getElementById("scroller").addEventListener("drag", scrollDown);
// function scrollUp() {
//     window.scrollBy({top: -50, behavior: 'smooth'});
// }
// document.getElementById("scroller").addEventListener("click", scrollUp);




// const scroller = document.getElementById('scroller');
// let isDown = false;
// let startY;
// let scrollUp;

// scroller.addEventListener('mousedown', () => {
//     isDown = true;
//     scroller.classList.add('active');
//     startY = e.pageY - scroller.offsetUp;
//     scrollUp = scroller.scrollUp;
// });

// scroller.addEventListener('mouseleave' , () => {
//     isDown = false;
//     scroller.classList.remove('active');
// });

// scroller.addEventListener('mouseup', () => {
//     scroller.classList.remove('active');
// });

// scroller.addEventListener('mousemove', (e) => {
//     if(!isDown) return;
//     e.preventDefault();
//     const Y = e.pageY - scroller.offsetUp;
//     console.log({Y, startY});
//     const walk = (Y - startY) * 3;
//     scroller.scrollUp = scrollUp - walk;
// });

