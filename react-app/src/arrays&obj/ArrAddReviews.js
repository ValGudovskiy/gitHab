const arrReviews = [
    {
      id: 1,
      userName: "Марк Г.",
      altMen: "фотография человека",
      srcMen: "../../../image/images/review-1.jpeg",
      classNameMen: "reviews-block__photo-man reviews-block__photo-man-1",
  
      rating: "5",
      usageExperience: `менее месяца`,
      dignities: `Это мой первый айфон после огромного количества телефонов на андроиде. всё плавно, чётко и красиво. довольно шустрое устройство. Камера весьма неплохая, ширик тоже на высоте.`,
      drawback: `к самому устройству мало имеет отношение, но перенос
      данных с андроида - адская вещь а если нужно переносить
      фото с компа, то это только через itunes, который урезает
      качество фотографий исходное`,
    },
    {
      id: 2,
      userName: "Валерий Коваленко",
      altMen: "фотография человека",
      srcMen: "../../../image/images/review-2.jpeg",
      classNameMen: "reviews-block__photo-man reviews-block__photo-man-1",
  
      rating: "4",
      usageExperience: `менее месяца`,
      dignities: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,
      drawback: `Плохая ремонтопригодность`,
    },
  ];
   function ArrAddReviews(){
    return arrReviews
  }

  export default ArrAddReviews;
