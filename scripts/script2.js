 'use strict';

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно1');

 // Scroll up
 const scrollUpButton = document.querySelector('.scroll-up');

 if (!scrollUpButton) return; // Если кнопки нет, выходим


 const windowHeight = document.documentElement.clientHeight; // Высота видимой части окна

 // Показать кнопку при прокрутке вниз на высоту экрана
 document.addEventListener('scroll', () => {
     let scrollPageY = window.scrollY; // Исправлено с this.scrollY

     if (scrollPageY >= windowHeight) {
     
         scrollUpButton.classList.add('scroll-up--show');
     } else {
         scrollUpButton.classList.remove('scroll-up--show');
    
     }
 });

 // Плавная прокрутка наверх при нажатии на кнопку
 scrollUpButton.addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });
}); 