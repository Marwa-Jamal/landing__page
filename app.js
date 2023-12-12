

/*Clicking on a navigation item should scroll to the appropriate section of the page.*/

const firstSection = document.querySelector('#firstSection');

const secondSection = document.querySelector('#secondSection');

const thirdSection = document.querySelector('#thirdSection');

const section1 = document.querySelector('#Section1');

const section2 = document.querySelector('#Section2');

const section3 = document.querySelector('#Section3');



firstSection.addEventListener('click', function(event) {
    event.preventDefault()
    section1.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
});

secondSection.addEventListener('click', function(event) {
  event.preventDefault()
    section2.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
});

thirdSection.addEventListener('click', function(event) {
    event.preventDefault()
    section3.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
});

/* Show the navigation bar on the main page page and hide while scrolling,
I have created a div with id "#scrolling" includes the three sections and the footer,
I didnot include the header then I add an event "mouseover" that div the nav bar hides and
I setTimeOut after 5 seconds the the nav bar shows out  */ 

const nav_bar = document.querySelector('.page__header');
const scrolling = document.querySelector('#scrolling');
const header = document.querySelector('.main__hero');
header.addEventListener('mouseover', function(){
  nav_bar.style.top = '0';
})
scrolling.addEventListener('mouseover', function(){
  nav_bar.style.top = '0';
  setTimeout(function(){
    nav_bar.style.top = '-50';}, "10000");
})

/* Add an active state to your navigation items when a section is in the viewport.*/
 function makeActive(){
    const sections = scrolling.children;
    for( const section of sections){
        box = section.getBoundingClientRect();
        if (box.top >= -32 && box.bottom >= 660){
            section.classList.add('Active');
        }else {
            section.classList.remove('Active');
        };};
};
  
document.addEventListener('scroll', makeActive)


