//scroll докрутка до секции 
var myFullpage = new fullpage('#fullpage', {
  //Navigation
  menu: '#menu',
  lockAnchors: false,
  anchors:['.slide1', 'slide2','slide3','slide4','slide5'],
  //Scrolling
  css3: true,
  scrollingSpeed: 1500,
  autoScrolling: false,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,
  
  //Accessibility
  
  
  //Design
  /*controlArrows: true,
  verticalCentered: true,
  sectionsColor : ['#ccc', '#fff'],
  paddingTop: '3em',
  paddingBottom: '10px',
  fixedElements: '#header, .footer',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallax: false,
  parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  dropEffect: false,
  dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
  waterEffect: false,
  waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
  cards: false,
  cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},*/
  
  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',
  
  lazyLoading: true,
  
  //events
  onLeave: function(origin, destination, direction){},
  afterLoad: function(origin, destination, direction){},
  afterRender: function(){},
  afterResize: function(width, height){},
  afterReBuild: function(){},
  afterResponsive: function(isResponsive){},
  afterSlideLoad: function(section, origin, destination, direction){},
  onSlideLeave: function(section, origin, destination, direction){}
  });






//обработчик события 
const Boxess = document.querySelectorAll('.light');


window.addEventListener('scroll', checkBoxess);

checkBoxess(); // 

function checkBoxess() {
  const triggerBottom = (window.innerHeight / 5 * 5);
  
  Boxess.forEach(light => {
    const lightTop = light.getBoundingClientRect().top;
    
    if(lightTop < triggerBottom) {
        light.classList.add('shows','bgs');

    } else {
        light.classList.remove('shows','bgs');
    }
  })
}

        
   




//обработчик события 
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();  

function checkBoxes() {
const triggerBottom = (window.innerHeight / 5 * 5);

boxes.forEach(box => {
const boxTop = box.getBoundingClientRect().top;

if(boxTop < triggerBottom) {
box.classList.add('show','bgoff');
} else {
box.classList.remove('show','bgoff');
}
})
}





   
    //parallax двигает объекты 
    
    let cloud1 = document.getElementById('cloud1');
    let cloud2 = document.getElementById('cloud2');
    let sun = document.getElementById('sun');
    let back = document.getElementById('back');
    let mount = document.getElementById('mount');
    let front = document.getElementById('front');

            window.addEventListener('scroll', function(){
                let value = window.scrollY;

    cloud1.style.paddingLeft = value * 0.1 + '%';
     cloud2.style.paddingRight = value * 0.1 + '%';
    sun.style.bottom = value * -0.1 + '%';
     back.style.bottom = value * -0.03 + '%';
    mount.style.bottom = value * -0.06 + '%'; 
     front.style.bottom = value * 0 + '%';
    })

 



    //кнопка меню для телефона
    const toggleMenu = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    toggleMenu.onclick = function(){
        toggleMenu.classList.toggle('active');
        navigation.classList.toggle('active');
    }



//неоновые буквы 
function neos() {$(document).ready(function () {
$('#neonthis, #neo').novacancy({
  'reblinkProbability': 0.4,
'blinkMin': 0.1,
'blinkMax': 0.4,
'loopMin': 1,
'loopMax': 2,
'color': '#5ED0BD',
'glow': ['0 0 80px #50C878', '0 0 30px #50C878', '0 0 6px #50C878'],
'off': 0,
'blink': 2,
'autoOn': true
});
});}

neos ()

/*var y = document.body.className;
function upsd (){
var s = document.body.className;
if (s == y ){
    Move()
}
}
setInterval(upsd,1000);*/
