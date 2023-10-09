export const formMainObj = {
  // arrPriceInfo: [
  //   {
  //     id: 1,
  //     name: "Самовывоз",
  //     date:
  //       new Date().getDay + " " + new Date().getDate + "" + new Date().getMonth,
  //     cost: "бесплатно",
  //   },
  //   { id: 2, name: "Курьером", date: "четверг, 1 сентября", cost: "бесплатно" },
  // ],
  id: "electronics_smartphone&gadgets",// название раздела

  value: {
    id: " smartphone",//название катигории
    products: {
      iPhone_13://ключь продукта должен совпадать с (id:) в (arrConfigProduct)  
        {
        objSpecification: {
          name_header: `Смартфон Apple iPhone 13`,//название продукта
          name_colorId: "Цвет товара: ",//цвет товара
          configMainFeatureBlock: `Конфигурация памяти:`,//название блока
          propertyMainFeatureBlock: "Характеристики товара",//название блока
          property: [
            //информация о товаре отображается после( propertyMainFeatureBlock )(name + nameValue) 
            // (value )если указано отобразит после( name )выбранную позицию из (arrConfigButtonMamory)
            // можно создавать сколько угодно 
            { id: 1, name: `Экран:`, nameValue: ` 6.1` },
            {
              id: 2,
              name: "Встроенная память:",
              value: "? ",
              nameValue: " ГБ",
            },
            { id: 3, name: `Операционная система:`, nameValue: ` iOS 15` },
            {
              id: 4,
              name: "Беспроводной интерфейс",
              nameValue: "NFS, Bluetooth, Wi-Fi",
            },
            {
              id: 5,
              name: "Процессор",
              nameValue: ` Apple A15 Bionic,`,
              nameSrc: "https://ru.wikipedia.org/wiki/Apple_A15",
            },
            { id: 6, name: "", nameValue: `173 г,` },
          ],

          asidePrice__priceOld: `75990₽`,//
          asidePrice__priceSale: `8%`,//
          asidePrice__priceNew: `67990₽`,//
        },
        descriptionBlock: {
          name: "Описание",
          nameValue: [
            {
              paragraph_1:
                "Наша самая совершенная система двух камер. Особый взгляд на прочность дисплея. Чип, с которым всё супербыстро. Аккумулятор держится заметно дольше.",
              paragraph_2: "Android 12 - сильный мира всего.",
            },

            "Мы разработали совершенно новую схему расположения и развернули объективы на 60 градусов. Благодаря этому внутри корпуса поместилась наша лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, мы освободили место для системы оптической стабилизации изображения сдвигом матрицы. И повысили скорость работы матрицы на сверхширокоугольной камере.",
            "Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков. Новая широкоугольная камера улавливает на 60% больше света для более качественных фотографий и видео. Новая оптическая стабилизация со сдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении. ",
            "Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещения фокуса и изменения резкости. Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съёмки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео будут смотреться как настоящее кино.",
          ],
        },
        arrConfigButtonMamory: [
          {
            id: 128,
            content: "128 ГБ",
            priceMarkup: 0,
          },
          {
            id: 256,
            content: "256 ГБ",
            priceMarkup: 15,
          },
          {
            id: 512,
            content: "512 ГБ",
            priceMarkup: 30,
          },
        ],

        arrConfigProduct: [
          {
            id: "iPhone_13/red/",
            colorId: "red",
            idTr: "красный",

            src: "../../../../image/images/iPhone_13/color-1.png",
            alt: "корпус телефона в красном исполнении",
            typeCollor: [
              {
                id: 1,
                src: "../../../image/images/iPhone_13/img_red/red-4.jpg",

                alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
              },
              {
                id: 2,
                src: "../../../image/images/iPhone_13/img_red/red-3.jpg",

                alt: "телефон iPhone в анфас",
              },
              {
                id: 3,
                src: "../../../image/images/iPhone_13/img_red/red-2.jpg",

                alt: "телефон iPhone в полуафас",
              },
              {
                id: 4,
                src: "../../../image/images/iPhone_13/img_red/red-1.jpg",

                alt: "увеличенное изображение задней панели в области камеры",
              },
              {
                id: 5,
                src: "../../../image/images/iPhone_13/img_red/red-5.jpg",
                alt: "изображение задней панели телефона и в анфас",
              },
            ],
          },
          {
            id: "iPhone_13/gray/",
            colorId: "gray",
            idTr: "серый",
            alt: "корпус телефона в сером исполнении",
            src: "../../../image/images/iPhone_13/color-2.png",
            typeCollor: [
              {
                id: 1,
                src: "../../../image/images/iPhone_13/img_gray/gray-1.png",
                alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
              },
              {
                id: 2,
                src: "../../../image/images/iPhone_13/img_gray/gray-2.png",
                alt: "телефон iPhone в анфас",
              },
              {
                id: 3,
                src: "../../../image/images/iPhone_13/img_gray/gray-3.jpg",
                alt: "телефон iPhone в полуафас",
              },
              {
                id: 4,
                src: "../../../image/images/iPhone_13/img_gray/gray-4.png",
                alt: "увеличенное изображение задней панели в области камеры",
              },
              {
                id: 5,
                src: "../../../image/images/iPhone_13/img_gray/gray-5.png",
                alt: "изображение задней панели телефона и в анфас",
              },
            ],
          },
          {
            id: "iPhone_13/pink/",
            colorId: "pink",
            idTr: "розовый",
            src: "../../../image/images/iPhone_13/color-3.png",
            alt: "корпус телефона в розовом исполнении",
            typeCollor: [
              {
                id: 1,
                src: "../../../image/images/iPhone_13/img_pink/pink-4.jpg",

                alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
              },
              {
                id: 2,
                src: "../../../image/images/iPhone_13/img_pink/pink-2.jpg",
                alt: "телефон iPhone в анфас",
              },
              {
                id: 3,
                src: "../../../image/images/iPhone_13/img_pink/pink-3.png",
                alt: "телефон iPhone в полуафас",
              },
              {
                id: 4,
                src: "../../../image/images/iPhone_13/img_pink/pink-1.jpg",

                alt: "увеличенное изображение задней панели в области камеры",
              },
              {
                id: 5,
                src: "../../../image/images/iPhone_13/img_pink/pink-5.jpg",
                alt: "изображение задней панели телефона и в анфас",
              },
            ],
          },
          {
            id: "iPhone_13/blue/",
            colorId: "blue",
            idTr: "синий",
            src: "../../../image/images/iPhone_13/color-4.png",
            alt: "корпус телефона в голубом исполнении",
            typeCollor: [
              {
                id: 1,
                src: "../../../image/images/iPhone_13/img_blue/image-1.png",
                alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
              },
              {
                id: 2,
                src: "../../../image/images/iPhone_13/img_blue/image-2.png",
                alt: "телефон iPhone в анфас",
              },
              {
                id: 3,
                src: "../../../image/images/iPhone_13/img_blue/image-3.png",
                alt: "телефон iPhone в полуафас",
              },
              {
                id: 4,
                src: "../../../image/images/iPhone_13/img_blue/image-4.png",
                alt: "увеличенное изображение задней панели в области камеры",
              },
              {
                id: 5,
                src: "../../../image/images/iPhone_13/img_blue/image-5.png",
                alt: "изображение задней панели телефона и в анфас",
              },
            ],
          },
          {
            id: "iPhone_13/white/",
            colorId: "white",
            idTr: "белый",
            src: "../../../image/images/iPhone_13/color-5.png",
            alt: "корпус телефона в белом исполнении",
            typeCollor: [
              {
                id: 1,
                src: "../../../image/images/iPhone_13/img_white/white-3.jpg",

                alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
              },
              {
                id: 2,
                src: "../../../image/images/iPhone_13/img_white/white-2.png",
                alt: "телефон iPhone в анфас",
              },
              {
                id: 3,
                src: "../../../image/images/iPhone_13/img_white/white-1.jpg",

                alt: "телефон iPhone в полуафас",
              },
              {
                id: 4,
                src: "../../../image/images/iPhone_13/img_white/white-4.jpg",
                alt: "увеличенное изображение задней панели в области камеры",
              },
              {
                id: 5,
                src: "../../../image/images/iPhone_13/img_white/white-5.jpg",
                alt: "изображение задней панели телефона и в анфас",
              },
            ],
          },
          {
            id: "iPhone_13/black/",
            colorId: "black",
            idTr: "черный",
            src: "../../../image/images/iPhone_13/color-6.png",
            alt: "корпус телефона в черном исполнении",
            typeCollor: [
              {
                id: 1,
                src: "../../../image/images/iPhone_13/img_black/black-1.jpg",
                alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
              },
              {
                id: 2,
                src: "../../../image/images/iPhone_13/img_black/black-2.jpg",
                alt: "телефон iPhone в анфас",
              },
              {
                id: 3,
                src: "../../../image/images/iPhone_13/img_black/black-3.png",
                alt: "телефон iPhone в полуафас",
              },
              {
                id: 4,
                src: "../../../image/images/iPhone_13/img_black/black-4.jpg",
                alt: "увеличенное изображение задней панели в области камеры",
              },
              {
                id: 5,
                src: "../../../image/images/iPhone_13/img_black/black-5.jpg",
                alt: "изображение задней панели телефона и в анфас",
              },
            ],
          },
        ],
      },
    },
  },
};
