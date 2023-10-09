export const MainObjProductsSmartPhone = {
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
  id: "electronics_smartphone&gadgets",
  name: "Электроника_Смартфоны и гаджеты",
  value: [
    {
      id: "smartphone",
      products: {
        iPhone_13: {
          objSpecification: {
            name_header: `Смартфон Apple iPhone 13`,
            name_colorId: "Цвет товара: ",
            configMainFeatureBlock: `Конфигурация памяти:`,
            propertyMainFeatureBlock: "Характеристики товара",
            property: [
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

            asidePrice__priceOld: `75990₽`,
            asidePrice__priceSale: `8%`,
            asidePrice__priceNew: `67990₽`,
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
        iPhone_10: {
          objSpecification: {
            name_header: `Смартфон Apple iPhone 10`,
            name_colorId: "Цвет товара: ",
            configMainFeatureBlock: `Конфигурация памяти:`,
            propertyMainFeatureBlock: "Характеристики товара",
            property: [
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

            asidePrice__priceOld: `70990₽`,
            asidePrice__priceSale: `8%`,
            asidePrice__priceNew: `6990₽`,
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
              id: 16,
              content: "16 ГБ",
              priceMarkup: 0,
            },
            {
              id: 32,
              content: "32 ГБ",
              priceMarkup: 15,
            },
            {
              id: 64,
              content: "64 ГБ",
              priceMarkup: 30,
            },
            {
              id: 124,
              content: "124 ГБ",
              priceMarkup: 30,
            },
          ],

          arrConfigProduct: [
            {
              id: "iPhone_10/red/",
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
              id: "iPhone_10/gray/",
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
              id: "iPhone_10/pink/",
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
              id: "iPhone_10/blue/",
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
              id: "iPhone_10/white/",
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
              id: "iPhone_10/black/",
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

        android_12: {
          objSpecification: {
            name_header: `Смартфон Android 12`,
            name_colorId: "Цвет товара: ",
            configMainFeatureBlock: `Конфигурация памяти:`,
            propertyMainFeatureBlock: "Характеристики товара",
            property: [
              { id: 1, name: `Экран:`, nameValue: ` 6.1` },
              {
                id: 2,
                name: "Встроенная память: ",
                value: "? ",
                nameValue: " ГБ",
              },
              {
                id: 3,
                name: `Операционная система:`,
                nameValue: ` android 12`,
              },
              {
                id: 4,
                name: "Беспроводной интерфейс ",
                nameValue: "NFS, Bluetooth, Wi-Fi",
              },
              {
                id: 5,
                name: "Процессор: ",
                nameValue: ` Android_12`,
                nameSrc: "https://ru.wikipedia.org/wiki/Android#Android_12",
              },
              { id: 6, name: "вес ", nameValue: `173 г` },
            ],

            asidePrice__priceOld: `100990₽`,
            asidePrice__priceSale: `8%`,
            asidePrice__priceNew: `31990₽`,
          },
          descriptionBlock: {
            name: "Описание",
            nameValue: [
              {
                paragraph_1:
                  "Наша самая совершенная система двух камер. Особый взгляд на прочность дисплея. Чип, с которым всё супербыстро. Аккумулятор держится заметно дольше. ",
                paragraph_2: " Android 12 - сильный мира всего.",
              },

              "Мы разработали совершенно новую схему расположения и развернули объективы на 60 градусов. Благодаря этому внутри корпуса поместилась наша лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, мы освободили место для системы оптической стабилизации изображения сдвигом матрицы. И повысили скорость работы матрицы на сверхширокоугольной камере.",
              "Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков. Новая широкоугольная камера улавливает на 60% больше света для более качественных фотографий и видео. Новая оптическая стабилизация со сдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении. ",
              "Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещения фокуса и изменения резкости. Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съёмки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео будут смотреться как настоящее кино.",
            ],
          },
          arrConfigButtonMamory: [
            {
              id: 32,
              content: "32 ГБ",
              priceMarkup: 0,
            },
            {
              id: 64,
              content: "64 ГБ",
              priceMarkup: 10,
            },
            {
              id: 128,
              content: "128 ГБ",
              priceMarkup: 15,
            },
            {
              id: 256,
              content: "256 ГБ",
              priceMarkup: 20,
            },
            {
              id: 512,
              content: "512 ГБ",
              priceMarkup: 30,
            },
          ],

          arrConfigProduct: [
            {
              id: "android_12/yellow/",
              colorId: "yellow",
              idTr: "жёлтый",

              src: "https://avatars.mds.yandex.net/get-mpic/4304063/img_id4648302631012143983.jpeg/orig",
              alt: "корпус телефона в красном исполнении",
              typeCollor: [
                {
                  id: 1,
                  src: "https://avatars.mds.yandex.net/get-mpic/5236248/img_id6842487034279928087.jpeg/orig",

                  alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
                },
                {
                  id: 2,
                  src: "https://avatars.mds.yandex.net/get-mpic/4304063/img_id4648302631012143983.jpeg/orig",

                  alt: "телефон iPhone в анфас",
                },
                {
                  id: 3,
                  src: "https://avatars.mds.yandex.net/get-mpic/5281727/img_id2894476184253900809.jpeg/orig",

                  alt: "телефон iPhone в полуафас",
                },
                {
                  id: 4,
                  src: "https://avatars.mds.yandex.net/get-mpic/4709279/img_id8938792137090095246.jpeg/orig",

                  alt: "увеличенное изображение задней панели в области камеры",
                },
                {
                  id: 5,
                  src: "https://avatars.mds.yandex.net/get-mpic/5272711/img_id8613625470781583064.jpeg/orig",
                  alt: "изображение задней панели телефона и в анфас",
                },
              ],
            },
            {
              id: "android_12/gray/",
              colorId: "gray",
              idTr: "серый",
              alt: "корпус телефона в сером исполнении",
              src: "https://avatars.mds.yandex.net/get-mpic/5316009/img_id5137463564741653574.jpeg/orig",
              typeCollor: [
                {
                  id: 1,
                  src: "https://avatars.mds.yandex.net/get-mpic/5320264/img_id3549934561096180184.jpeg/orig",
                  alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
                },
                {
                  id: 2,
                  src: "https://avatars.mds.yandex.net/get-mpic/5236045/img_id95561728713687502.jpeg/orig",
                  alt: "телефон iPhone в анфас",
                },
                {
                  id: 3,
                  src: "https://avatars.mds.yandex.net/get-mpic/5316009/img_id5137463564741653574.jpeg/orig",
                  alt: "телефон iPhone в полуафас",
                },
                {
                  id: 4,
                  src: "https://avatars.mds.yandex.net/get-mpic/4606255/img_id2447534454702797870.jpeg/orig",

                  // src: "https://avatars.mds.yandex.net/get-mpic/4034372/img_id8312312893523157294.jpeg/orig",
                  alt: "увеличенное изображение задней панели в области камеры",
                },
                {
                  id: 5,
                  src: "https://avatars.mds.yandex.net/get-mpic/4034372/img_id8312312893523157294.jpeg/orig",

                  alt: "изображение задней панели телефона и в анфас",
                },
              ],
            },
            {
              id: "android_12/blue/",
              colorId: "blue",
              idTr: "синий",
              src: "https://avatars.mds.yandex.net/get-mpic/4525599/img_id4686693884647341890.jpeg/orig",
              alt: "корпус телефона в голубом исполнении",
              typeCollor: [
                {
                  id: 1,
                  src: "https://avatars.mds.yandex.net/get-mpic/2008488/img_id6871733388572256863.jpeg/orig",
                  alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
                },
                {
                  id: 2,
                  src: "https://avatars.mds.yandex.net/get-mpic/1901647/img_id1578208031245930089.jpeg/orig",
                  alt: "телефон iPhone в анфас",
                },
                {
                  id: 3,
                  src: "https://avatars.mds.yandex.net/get-mpic/4525599/img_id4686693884647341890.jpeg/orig",
                  alt: "телефон iPhone в полуафас",
                },
                {
                  id: 4,
                  src: "https://avatars.mds.yandex.net/get-mpic/1855911/img_id6033334755181933510.jpeg/orig",
                  alt: "увеличенное изображение задней панели в области камеры",
                },
                {
                  id: 5,
                  src: "https://avatars.mds.yandex.net/get-mpic/4362876/img_id5482007086913538614.jpeg/orig",
                  alt: "изображение задней панели телефона и в анфас",
                },
              ],
            },
            {
              id: "android_12/white/",
              colorId: "white",
              idTr: "белый",
              src: "https://avatars.mds.yandex.net/get-mpic/7722094/img_id5780631900437832763.png/orig",
              typeCollor: [
                {
                  id: 1,
                  src: "https://avatars.mds.yandex.net/get-mpic/6439030/img_id8966125108926982915.jpeg/orig",

                  alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
                },
                {
                  id: 2,
                  src: "https://avatars.mds.yandex.net/get-mpic/6303765/img_id1206877454572591582.png/orig",
                  alt: "телефон iPhone в анфас",
                },
                {
                  id: 3,
                  src: "https://avatars.mds.yandex.net/get-mpic/7722094/img_id5780631900437832763.png/orig",

                  alt: "телефон iPhone в полуафас",
                },
                {
                  id: 4,
                  src: "https://avatars.mds.yandex.net/get-mpic/4725655/img_id340830722374690586.png/orig",
                  alt: "увеличенное изображение задней панели в области камеры",
                },
                {
                  id: 5,
                  src: "https://avatars.mds.yandex.net/get-mpic/5194288/img_id4686038995168582513.png/orig",
                  alt: "изображение задней панели телефона и в анфас",
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: "gadgets",
      products: {
        iPhone_ch_13: {
          objSpecification: {
            name_header: `Чехол iPhone 13`,
            name_colorId: "Цвет товара: ",
            configMainFeatureBlock: `Конфигурация памяти:`,
            propertyMainFeatureBlock: "Характеристики товара",
            property: [
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

            asidePrice__priceOld: `75990₽`,
            asidePrice__priceSale: `8%`,
            asidePrice__priceNew: `67990₽`,
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
              id: "iPhone_ch_13/red/",
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
              id: "iPhone_ch_13/gray/",
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
              id: "iPhone_ch_13/pink/",
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
              id: "iPhone_ch_13/blue/",
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
              id: "iPhone_ch_13/white/",
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
              id: "iPhone_ch_13/black/",
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
        iPhone_10: {
          objSpecification: {
            name_header: `Смартфон Apple iPhone 10`,
            name_colorId: "Цвет товара: ",
            configMainFeatureBlock: `Конфигурация памяти:`,
            propertyMainFeatureBlock: "Характеристики товара",
            property: [
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

            asidePrice__priceOld: `70990₽`,
            asidePrice__priceSale: `8%`,
            asidePrice__priceNew: `6990₽`,
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
              id: 16,
              content: "16 ГБ",
              priceMarkup: 0,
            },
            {
              id: 32,
              content: "32 ГБ",
              priceMarkup: 15,
            },
            {
              id: 64,
              content: "64 ГБ",
              priceMarkup: 30,
            },
            {
              id: 124,
              content: "124 ГБ",
              priceMarkup: 30,
            },
          ],

          arrConfigProduct: [
            {
              id: "iPhone_10/red/",
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
              id: "iPhone_10/gray/",
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
              id: "iPhone_10/pink/",
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
              id: "iPhone_10/blue/",
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
              id: "iPhone_10/white/",
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
              id: "iPhone_10/black/",
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

        android_12: {
          objSpecification: {
            name_header: `Смартфон Android 12`,
            name_colorId: "Цвет товара: ",
            configMainFeatureBlock: `Конфигурация памяти:`,
            propertyMainFeatureBlock: "Характеристики товара",
            property: [
              { id: 1, name: `Экран:`, nameValue: ` 6.1` },
              {
                id: 2,
                name: "Встроенная память: ",
                value: "? ",
                nameValue: " ГБ",
              },
              {
                id: 3,
                name: `Операционная система:`,
                nameValue: ` android 12`,
              },
              {
                id: 4,
                name: "Беспроводной интерфейс ",
                nameValue: "NFS, Bluetooth, Wi-Fi",
              },
              {
                id: 5,
                name: "Процессор: ",
                nameValue: ` Android_12`,
                nameSrc: "https://ru.wikipedia.org/wiki/Android#Android_12",
              },
              { id: 6, name: "вес ", nameValue: `173 г` },
            ],

            asidePrice__priceOld: `100990₽`,
            asidePrice__priceSale: `8%`,
            asidePrice__priceNew: `31990₽`,
          },
          descriptionBlock: {
            name: "Описание",
            nameValue: [
              {
                paragraph_1:
                  "Наша самая совершенная система двух камер. Особый взгляд на прочность дисплея. Чип, с которым всё супербыстро. Аккумулятор держится заметно дольше. ",
                paragraph_2: " Android 12 - сильный мира всего.",
              },

              "Мы разработали совершенно новую схему расположения и развернули объективы на 60 градусов. Благодаря этому внутри корпуса поместилась наша лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, мы освободили место для системы оптической стабилизации изображения сдвигом матрицы. И повысили скорость работы матрицы на сверхширокоугольной камере.",
              "Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков. Новая широкоугольная камера улавливает на 60% больше света для более качественных фотографий и видео. Новая оптическая стабилизация со сдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении. ",
              "Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещения фокуса и изменения резкости. Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съёмки, создавая красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео будут смотреться как настоящее кино.",
            ],
          },
          arrConfigButtonMamory: [
            {
              id: 32,
              content: "32 ГБ",
              priceMarkup: 0,
            },
            {
              id: 64,
              content: "64 ГБ",
              priceMarkup: 10,
            },
            {
              id: 128,
              content: "128 ГБ",
              priceMarkup: 15,
            },
            {
              id: 256,
              content: "256 ГБ",
              priceMarkup: 20,
            },
            {
              id: 512,
              content: "512 ГБ",
              priceMarkup: 30,
            },
          ],

          arrConfigProduct: [
            {
              id: "android_12/yellow/",
              colorId: "yellow",
              idTr: "жёлтый",

              src: "https://avatars.mds.yandex.net/get-mpic/4304063/img_id4648302631012143983.jpeg/orig",
              alt: "корпус телефона в красном исполнении",
              typeCollor: [
                {
                  id: 1,
                  src: "https://avatars.mds.yandex.net/get-mpic/5236248/img_id6842487034279928087.jpeg/orig",

                  alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
                },
                {
                  id: 2,
                  src: "https://avatars.mds.yandex.net/get-mpic/4304063/img_id4648302631012143983.jpeg/orig",

                  alt: "телефон iPhone в анфас",
                },
                {
                  id: 3,
                  src: "https://avatars.mds.yandex.net/get-mpic/5281727/img_id2894476184253900809.jpeg/orig",

                  alt: "телефон iPhone в полуафас",
                },
                {
                  id: 4,
                  src: "https://avatars.mds.yandex.net/get-mpic/4709279/img_id8938792137090095246.jpeg/orig",

                  alt: "увеличенное изображение задней панели в области камеры",
                },
                {
                  id: 5,
                  src: "https://avatars.mds.yandex.net/get-mpic/5272711/img_id8613625470781583064.jpeg/orig",
                  alt: "изображение задней панели телефона и в анфас",
                },
              ],
            },
            {
              id: "android_12/gray/",
              colorId: "gray",
              idTr: "серый",
              alt: "корпус телефона в сером исполнении",
              src: "https://avatars.mds.yandex.net/get-mpic/5316009/img_id5137463564741653574.jpeg/orig",
              typeCollor: [
                {
                  id: 1,
                  src: "https://avatars.mds.yandex.net/get-mpic/5320264/img_id3549934561096180184.jpeg/orig",
                  alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
                },
                {
                  id: 2,
                  src: "https://avatars.mds.yandex.net/get-mpic/5236045/img_id95561728713687502.jpeg/orig",
                  alt: "телефон iPhone в анфас",
                },
                {
                  id: 3,
                  src: "https://avatars.mds.yandex.net/get-mpic/5316009/img_id5137463564741653574.jpeg/orig",
                  alt: "телефон iPhone в полуафас",
                },
                {
                  id: 4,
                  src: "https://avatars.mds.yandex.net/get-mpic/4606255/img_id2447534454702797870.jpeg/orig",

                  // src: "https://avatars.mds.yandex.net/get-mpic/4034372/img_id8312312893523157294.jpeg/orig",
                  alt: "увеличенное изображение задней панели в области камеры",
                },
                {
                  id: 5,
                  src: "https://avatars.mds.yandex.net/get-mpic/4034372/img_id8312312893523157294.jpeg/orig",

                  alt: "изображение задней панели телефона и в анфас",
                },
              ],
            },
            {
              id: "android_12/blue/",
              colorId: "blue",
              idTr: "синий",
              src: "https://avatars.mds.yandex.net/get-mpic/4525599/img_id4686693884647341890.jpeg/orig",
              alt: "корпус телефона в голубом исполнении",
              typeCollor: [
                {
                  id: 1,
                  src: "https://avatars.mds.yandex.net/get-mpic/2008488/img_id6871733388572256863.jpeg/orig",
                  alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
                },
                {
                  id: 2,
                  src: "https://avatars.mds.yandex.net/get-mpic/1901647/img_id1578208031245930089.jpeg/orig",
                  alt: "телефон iPhone в анфас",
                },
                {
                  id: 3,
                  src: "https://avatars.mds.yandex.net/get-mpic/4525599/img_id4686693884647341890.jpeg/orig",
                  alt: "телефон iPhone в полуафас",
                },
                {
                  id: 4,
                  src: "https://avatars.mds.yandex.net/get-mpic/1855911/img_id6033334755181933510.jpeg/orig",
                  alt: "увеличенное изображение задней панели в области камеры",
                },
                {
                  id: 5,
                  src: "https://avatars.mds.yandex.net/get-mpic/4362876/img_id5482007086913538614.jpeg/orig",
                  alt: "изображение задней панели телефона и в анфас",
                },
              ],
            },
            {
              id: "android_12/white/",
              colorId: "white",
              idTr: "белый",
              src: "https://avatars.mds.yandex.net/get-mpic/7722094/img_id5780631900437832763.png/orig",
              typeCollor: [
                {
                  id: 1,
                  src: "https://avatars.mds.yandex.net/get-mpic/6439030/img_id8966125108926982915.jpeg/orig",

                  alt: "телефон iPhone задняя панель с камерой и изображение в анфас",
                },
                {
                  id: 2,
                  src: "https://avatars.mds.yandex.net/get-mpic/6303765/img_id1206877454572591582.png/orig",
                  alt: "телефон iPhone в анфас",
                },
                {
                  id: 3,
                  src: "https://avatars.mds.yandex.net/get-mpic/7722094/img_id5780631900437832763.png/orig",

                  alt: "телефон iPhone в полуафас",
                },
                {
                  id: 4,
                  src: "https://avatars.mds.yandex.net/get-mpic/4725655/img_id340830722374690586.png/orig",
                  alt: "увеличенное изображение задней панели в области камеры",
                },
                {
                  id: 5,
                  src: "https://avatars.mds.yandex.net/get-mpic/5194288/img_id4686038995168582513.png/orig",
                  alt: "изображение задней панели телефона и в анфас",
                },
              ],
            },
          ],
        },
      },
    },
  ],
};

function creatArr(obj) {
  let arr = [];
  arr.push({
    id: obj.id.split("_")[0],
    name: obj.name.split("_")[0],
    value: [
      {
        id: obj.id.split("_")[1],
        name: obj.name.split("_")[1],
        value: [
          {
            id: obj.id.split("_")[1].split("&")[0],
            name: obj.name.split("_")[1].split("и")[0],
            value: [
              ...Object.keys(
                obj.value.find(
                  (el) => el.id === obj.id.split("_")[1].split("&")[0]
                ).products
              ),
            ],
          },
          {
            id: obj.id.split("_")[1].split("&")[1],
            name: obj.name.split("_")[1].split("и")[1],
            value: [
              ...Object.keys(
                obj.value.find(
                  (el) => el.id === obj.id.split("_")[1].split("&")[1]
                ).products
              ),
            ],
          },
        ],
      },
    ],
  });
  return arr;
}

function creatArrId(arr) {
  let arrId = [];
  arr.forEach((el) => {
    if (el.id) {
      arrId.push({ id: el.id, name: el.name });
      if (el.value.length > 0) {
        arrId.push(...creatArrId(el.value));
      }
    }
  });
  return arrId;
}
export const arrPositions = [
  { name: "Главная", id: "", value: [{ id: "", name: "Гдавная" }] },
  {
    name: "Инструменты",
    id: "toolings",
    value: [
      {
        name: "Электроинструменты",
        id: "power_tools",
        value: [{ name: "дрель", id: "power_drill", value: [] }],
      },
      {
        name: "Бензоинструменты",
        id: "petrol_tools",
        value: [{ name: "дрель", id: "drill", value: [] }],
      },
    ],
  },
];
arrPositions.push(...creatArr(MainObjProductsSmartPhone));

arrPositions[0].value.push(...creatArrId(arrPositions));

arrPositions.forEach((element, index) => {
  if (element.id === MainObjProductsSmartPhone.id.split("_")[0]) {
    element.value.forEach((element) => {
      if (element.id === MainObjProductsSmartPhone.id.split("_")[1]) {
        element.value.forEach((element) => {
          if (element.id === MainObjProductsSmartPhone.value.id) {
            element.value = Object.keys(
              MainObjProductsSmartPhone.value.products
            );
          }
        });
      }
    });
  }
});
console.log(arrPositions);
