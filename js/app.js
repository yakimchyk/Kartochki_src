import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


const iconMenu = document.querySelectorAll('.product__itemcont');


iconMenu.forEach(iconMenu => {
   var originalDescHTML = iconMenu.querySelector('.product__desc').innerHTML;
   var originalTitleHTML = iconMenu.querySelector('.product__title').innerHTML;
   console.log(originalTitleHTML);
   iconMenu.addEventListener("click", function (e) {
      iconMenu.classList.toggle('_active');
      if (iconMenu.classList.contains("_active")) {
            iconMenu.querySelector('.product__desc').innerHTML = 'Печень утки разварная c артишоками.' ;
            ////////////////
            iconMenu.addEventListener("mouseenter", function (q) {
               iconMenu.querySelector('.product__title').innerHTML = 'Котэ не одобряет?';
            });
            iconMenu.addEventListener("mouseleave", function (q) {
               iconMenu.querySelector('.product__title').innerHTML = originalTitleHTML;
            });
            iconMenu.addEventListener("click", function (q) {
               iconMenu.querySelector('.product__title').innerHTML = originalTitleHTML;
            });
         } else {
            iconMenu.querySelector('.product__desc').innerHTML = originalDescHTML;
            ////////////////
            iconMenu.addEventListener("mouseenter", function (q) {
               iconMenu.querySelector('.product__title').innerHTML = originalTitleHTML;
            });
            iconMenu.addEventListener("mouseleave", function (q) {
               iconMenu.querySelector('.product__title').innerHTML = originalTitleHTML;
            });
         }
      });
   });


/* iconMenu.addEventListener("mouseover", function (q) {
   iconMenu.querySelector('.product__title').innerHTML = 'NO.';
});
iconMenu.addEventListener("mouseout", function (q) {
   iconMenu.querySelector('.product__title').innerHTML = originalTitleHTML;
}); */


/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

