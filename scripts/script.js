'use strict'

document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});
/* 
        *   Алгоритм
1. Начало.
2. Получаем кнопки.
3. Проверка условий (навешиваем слушатели событий на клик всех кнопок): есть ли клик на кнопку.
3.1 Да: смотрим нажата ли кнопка
3.1.1. Проверка условий
3.1.1.1. Да (кнопка уже нажата): смена цвета и текста кнопки в исходное состояние возвращаем.
3.1.1.1.1. Возвращаемся к "навешиваем слушатели событий на клик всех кнопок"
3.1.1.2. Нет (кнопка еще не нажата): смена цвета и текста кнопки в новое состояние.
3.1.1.2.1. Возвращаемся к "навешиваем слушатели событий на клик всех кнопок"
3.2 Нет: Конец
4. Конец
Блок-схема: /image/blockschema.png
   */

document.addEventListener("DOMContentLoaded", () => {
    // 2. Получаем кнопку
    const buttons = document.querySelectorAll('.popular__button');
    console.log(buttons.length);
    if (!buttons.length) return; // Если кнопки нет, ничего не делаем





    // 3. Навешиваем слушатель событий на клик

    // Метод массива forEach() (вместо цикла for) позволяет применить колбэк-функцию ко всем элементам массива. 
    // Можно использовать вместо классического цикла for. 
    // В отличие от него forEach() выглядит более читабельным и понятным.
    buttons.forEach((button) => {
        console.log("button");
        let isActive = false; // Состояние кнопки
        button.addEventListener('click', (e) => {
            // 3.1 Смотрим, нажата ли кнопка
            if (isActive) {
                // 3.1.1.1 Кнопка уже нажата: смена цвета и текста в исходное положение
                e.target.style.backgroundColor = "#AC8166"; // Возвращаем стандартный цвет
                e.target.textContent = "SHOP NOW"; // Исходный текст
                console.log("SHOP NOW");
            } else {
                // 3.1.1.2 Кнопка не нажата: смена цвета и текста
                e.target.style.backgroundColor = "#ffd1ad"; // Новый цвет
                e.target.textContent = "IN CART"; // Новый текст
                console.log("IN CART");
            }

            // Инвертируем состояние кнопки
            isActive = !isActive;
        });
    }

    );

})


/* Лекция 5 */
const cardsContainer = document.querySelector('#cards');
if (cardsContainer && false) {
    const cardList = cardsContainer.querySelector('.category__card__wrap');
    //Создаем объект cardsPriceData, которая содержит данные для трех карточки.
    const cardsPriceData = {
        // каждая ссылка содержит level (название тарифа), price (цена), description (описание тарифа), button (кнопку для оформления заявки).
        card1: {
            level: 'EARINGS',
            icon: 'image/Product_categories_earings.png',
            button: 'SHOP NOW'
        },
        card2: {
            level: 'NACKLACE',
            icon: 'image/Product_categories_Nacklace.png',
            button: 'SHOP NOW'
        },
        card3: {
            level: 'RINGS',
            icon: 'image/Product_categories_rings.png',
            button: 'SHOP NOW'
        },
        card4: {
            level: 'BRACLETS',
            icon: 'image/Product_categories_braclets.png',
            button: 'SHOP NOW'
        },
        card5: {
            level: 'SALES',
            icon: 'image/Product_categories_sales.png',
            button: 'SHOP NOW'
        },

    }

    //Создаем функцию createCard, которая будет добавлять карточку. Внутри функции 4 переменные: level (название тарифа), icon (картинка), button (кнопку для оформления заявки)
    const createCard = (level, icon, button) => {
        // Создаем переменную  card, которая будет содержать HTML-код карточки и вставляем туда 4 переменные
        const card = `
                    <div class="category__card">
                    <img class="category__image" src="${icon}" alt="" width="350">
                    <h3 class="category__button">${level}</h3>
                    <button class="popular__button interactive-button">${button}</button>
                </div>
                `;
                
        //  Возвращаем значение переменной card
        return card;
    }
    // Создаем цикл for и проходим по всем элементам объекта cardsPriceData.
    for (const cardKey in cardsPriceData) {
        //Получаем данные одной карточки из объекта cardsPriceData 
        const card = cardsPriceData[cardKey];
        //создаем переменную cardElement и вызываем функцию createLink, куда передаем тариф, цену, описание и кнопку (то, из чего будет состоять ваша карточка).
        const cardElement = createCard(card.level, card.icon, card.button);
        // с помощью метода insertAdjacentHTML добавляем созданный HTML-код в конец списка cardList.
        cardList.insertAdjacentHTML('beforeend', cardElement);
    }
}

 // Preloader страницы
 const preloader = document.querySelector('.preloader');
 const content = document.querySelector('.main');
 if (preloader && content) {
     setTimeout(() => {
         // Скрываем прелоадер
         preloader.style.opacity = '0';
         preloader.style.visibility = 'hidden';

         // Показываем контент
         content.style.display = 'block';

         // Удаляем элемент из DOM
         preloader.remove();
     }, 1000); // Задержка 1 секунды
 }


 /* Лекция 6 */
 const cardsContainer2 = document.querySelector('#cards');
 if (cardsContainer) {
     const cardList = cardsContainer2.querySelector('.category__card__wrap');

     // Пример URL для получения данных с сервера
     const apiUrl = 'data.json';

     // Функция для создания карточки
  //Создаем функцию createCard, которая будет добавлять карточку. Внутри функции 4 переменные: level (название тарифа), icon (картинка), button (кнопку для оформления заявки)
  const createCard = (level, icon, button) => {
    // Создаем переменную  card, которая будет содержать HTML-код карточки и вставляем туда 4 переменные
    const card = `
                <div class="category__card">
                <img class="category__image" src="${icon}" alt="" width="350">
                <h3 class="category__button">${level}</h3>
                <button class="popular__button interactive-button">${button}</button>
            </div>
            `;
            
    //  Возвращаем значение переменной card
    return card;
}

     // Загрузка данных с сервера
     fetch(apiUrl)
         .then(response => response.json())
         .then(data => {
             console.log(data); // Данные
             console.log(typeof (data)); // Тип полученных данных

             // for (const item in data) {
             //     const card = data[item];

             //     const cardElement = createCard(card.link, card.icon, card.iconAlt, card.iconWidth, card.iconHeight, card.title, card.description);
             //     cardList.insertAdjacentHTML('beforeend', cardElement);
             // }

             data.forEach(item => {            
                 const cardElement = createCard(item.level, item.icon, item.button);
                 cardList.insertAdjacentHTML('beforeend', cardElement);
             });
         })
         .catch(error => {
             console.error('Ошибка при загрузке данных:', error);
         });
 }

   // Карусель (слайдер)
   const slider = document.querySelector('.swiper');

   if (slider) {
       const swiper = new Swiper(slider, {
           // Дополнительные параметры
           slidesPerView: 4, // Количество слайдов на экране
           spaceBetween: 40, // Расстояние между слайдами
           loop: true,  // Зацикливание слайдов

           // Пагинация
           pagination: {
               el: '.swiper-pagination',
           },

           // Навигационные стрелки
           navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
           },
       });
   }

