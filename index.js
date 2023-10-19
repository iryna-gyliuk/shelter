// Main page
let mainPageMarkupDesktop = 14;
let mainPageMarkupTablet = 14;
let mainPageMarkupMobile = 14;
// Pets page
let petsPageMarkupDesktop = 6;
let petsPageMarkupTablet = 6;
let petsPageMarkupMobile = 6;
let noScrollMarkup = 20;
let responsiveMarkup = 8;
let buttonHumburgerAppear = 4;
let validMarkypCode = 8;
let taskMaximumPoints = 100;
let taskTotalPoints =
        mainPageMarkupDesktop +
        mainPageMarkupTablet +
        mainPageMarkupMobile +
        petsPageMarkupDesktop +
        petsPageMarkupTablet + 
        petsPageMarkupMobile +
        noScrollMarkup +
        responsiveMarkup +
        buttonHumburgerAppear +
        validMarkypCode;

// Print results
console.log(
    'Самооценка в баллах (' + taskTotalPoints + ' from ' + taskMaximumPoints + ')\n' + 
    '\t1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px +' + mainPageMarkupDesktop + '\n' +
    '\t2. Вёрстка страницы Main соответствует макету при ширине экрана 768px +' + mainPageMarkupTablet + '\n'+
    '\t3. Вёрстка страницы Main соответствует макету при ширине экрана 320px +' + mainPageMarkupMobile + '\n' +
    '\t4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px +' + petsPageMarkupDesktop + '\n'+
    '\t5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px +' + petsPageMarkupTablet + '\n'+
    '\t6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px +' + petsPageMarkupMobile + '\n'+
    '\t7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +' + noScrollMarkup + '\n'+
    '\t8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px +' + responsiveMarkup + '\n' +
    '\t9. Появляется иконка бургер-меню +' + buttonHumburgerAppear + '\n' +
    '\t10. Верстка обеих страниц валидная +' + validMarkypCode 
    );

    someDiv.innerHTML += 'hi';
