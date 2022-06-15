'use strict';

const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const showPopUp = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
} 
const hidePopUp = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0;i<showModal.length;i++)
showModal[i].addEventListener('click',showPopUp);
/*
showModal[i].addEventListener('click',function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});
*/

/*--------------------------------hiding the popup---------------*/
/*
closeModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
*/
closeModal.addEventListener('click',hidePopUp);

/*
overlay.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
*/

overlay.addEventListener('click',hidePopUp);

document.addEventListener('keyup',function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        hidePopUp();
    }
});