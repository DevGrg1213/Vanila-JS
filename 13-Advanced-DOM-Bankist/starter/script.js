// 'use strict';

// ///////////////////////////////////////
// // Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



// //////////////////////////
// ////// Page navigation
// //////////////////////////


// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   })
// });

// //1. Add event listener to common parent element.
// //2. Determine what element originated the event.


document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();

  // matching
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }

});
//////////////////////////////////
///// tabed component
///////////////////////////////////

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContents = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');

  // security clause
  if(!clicked) return;

  // remove classes
  tabs.forEach(t=>t.classList.remove('operations__tab--active'));
  tabContents.forEach(c=>c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // active tab content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active');

});


//////////////////////////////////////
///////////// Menu fade animation ///
////////////////////////////////////

const nav = document.querySelector('.nav');

const handleHover = function(e,opacity){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

  siblings.forEach(el=>{
    if(el !== link) el.style.opacity = opacity;
  });
  logo.style.opacity = opacity;

  }
}

nav.addEventListener('mouseover',function(e){
  handleHover(e,0.5);
});
nav.addEventListener('mouseout',function(e){
  handleHover(e,1);
});

///////////////////////////////////////////
// implementing the sticky navigation/////
/////////////////////////////////////////


// const section1 = document.querySelector('#section--1');
// const section1Coords = section1.getBoundingClientRect();

// window.addEventListener('scroll',function(){

//   if(window.scrollY > section1Coords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');

// });


// intersection observer API

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries){
  const [entry] = entries;

  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
  rootMargin:`-${navHeight}px`,
});

headerObserver.observe(header);


///////////////////////////////////
// Revealing Elements ////////////
/////////////////////////////////

const allSections = document.querySelectorAll('.section');

const revealSection = function(entries,observer){
  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15,
});


allSections.forEach(section=>{
  sectionObserver.observe(section);
  section.classList.add('section--hidden');

})


///////////////////////////////////
//// Lazy image loading///////////
/////////////////////////////////

const imgTarget = document.querySelectorAll('img[data-src]');
console.log(imgTarget);

const loadingImg = function(entries,observer){
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img');
  })
  observer.unobserve(entry.target);
}

const imageObserver = new IntersectionObserver(loadingImg,{
  root:null,
  threshold:0.15,
  // rootMargin:'200px',
});

imgTarget.forEach(img=>imageObserver.observe(img));



///////////////////////////////////////////
/////////////---Traversing DOM-------------
//////////////////////////////////////////

// const h1 = document.querySelector('h1');

// // going downwards:child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'white';
// console.log(h1.lastElementChild);
// h1.lastElementChild.style.color="orange";

// going upward

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.backgroundColor = 'yellow';
// h1.closest('h1').style.backgroundColor = 'green';

// side ways
// console.log('----- side ways --------');
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1){
//     el.style.transform = 'scale(0.5)';
//   }
// })









////////////////////////////////////
/////////slecting elements
////////////////////////////////////

// // console.log(document.documentElement);
// // console.log(document.head)
// // console.log(document.body); 

// // const header = document.querySelector('.header');
// // console.log(header);
// // console.log(document.querySelectorAll('.section'))
// // console.log(document.getElementById('section--1'));
// // console.log(document.getElementsByClassName('section'));
// // const btns = document.getElementsByClassName('btn');
// // console.log(btns);

// // creating and inserting elements

// // .insertAdjacentHTML

// // const message = document.createElement('div');
// // message.classList.add('cookie-message');
// // // message.textContent = 'we use cookies for improved functionality and analytics';
// // message.innerHTML = 'we use cookies for improved functionality and analytics <button class = "btn btn--close-cookie">Got it!</button>';

// // header.append(message);
// // header.prepend(message);
// // header.append(message.cloneNode(true));

// // header.after(message);
// // header.before(message);

// const cookiCLoseBtn = document.querySelector('.btn--close-cookie');
// cookiCLoseBtn.addEventListener('click',function(){
//   message.remove();
// })

// // style

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height)+30+'px';


// // altering the css variable

// // document.documentElement.style.setProperty('--color-primary','orange');

// // const logo = document.querySelector('.nav__logo');
// // relative 
// // console.log(logo.src)
// // absolute
// // console.log(logo.getAttribute('src'));

// // console.log(logo.className);
// // logo.alt = 'New milimistic logo';
// // console.log(logo.alt)

// // logo.setAttribute('company','Bankist');
// // console.log(logo.getAttribute('company'));

// // classes

// // logo.classList.add();
// // logo.classList.toggle();
// // logo.classList.remove();
// // console.log(logo.classList.contains('c'));

// // implementing smooth scrolling

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click',function(){
//   const s1coord = section1.getBoundingClientRect();
//   console.log(s1coord);

//   console.log('current scroll (x/y) ',window.pageYOffset,window.pageYOffset);
//   console.log('height and width of the viewport : ',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth);

//   // scrolling(current Position + current scroll)
//   // window.scrollTo(
//   //   s1coord.left+window.pageXOffset,
//   //   s1coord.top+window.pageYOffset);

//   // window.scrollTo({
//   //   left:s1coord.left+window.pageXOffset,
//   //   top:s1coord.top+window.pageYOffset,
//   //   behavior:'smooth',
//   // });
// //   section1.scrollIntoView({behavior:'smooth'})
// // })
// //
// // const h1 = document.querySelector('h1');
// //
// // const testMouser = function(){
// //   alert('Hello world');
//   // h1.removeEventListener('mouseenter',testMouser);
// // }
// // h1.addEventListener('mouseenter',testMouser);
// // setTimeout(()=>h1.removeEventListener('mouseenter',testMouser),3000);

// //
// // const randomNum = (min,max)=>
// //     Math.floor(Math.random()*(max-min +1)+min);
// // const randomColor = ()=> `rgb(${randomNum(0,225)},${randomNum(0,225)},${randomNum(0,225)})`;
// //
// //
// // document.querySelector('.nav__link').addEventListener
// // ('click',function(e){
// //   this.style.backgroundColor = randomColor();
// //   console.log('LINK',e.target,e.currentTarget);
// //   console.log(e.currentTarget === this);

// //  stop propagation
// //   e.stopPropagation();
// // });



// // document.querySelector('.nav__links').addEventListener
// // ('click',function(e){
// //   this.style.backgroundColor = randomColor();
// //   console.log('NAV',e.target,e.currentTarget);
// // });
// // document.querySelector('.nav').addEventListener
// // ('click',function(e){
// //   this.style.backgroundColor = randomColor();
// //   console.log('NAVBAR',e.target,e.currentTarget);
// // },true);
// //

// window.addEventListener('beforeunload',function(e){
//   e.preventDefault();
//   e.returnValue = '';
// });