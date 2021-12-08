const nav = document.getElementsByClassName ('nav');
const burger = document.getElementsByClassName('burger');



burger[0].addEventListener('click', openModal);
burger[1].addEventListener('click', closeModal);


function openModal(){
    // console.dir (burger)
    burger[0].style.display = 'none';
    burger[1].style.display = 'block';
    for (i=0; i<5; i++) {
    nav[i].style.display = 'flex';
    }
 }
 function closeModal(){
    burger[1].style.display = 'none';
    burger[0].style.display = 'block';
    for (i=0; i<5; i++) {
    nav[i].style.display = 'none';
    }
 }
