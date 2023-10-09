export default     function totalPrice(obj, price,id) {
    let arrId = id.split("/")
    let pricePlus = obj[id.split("/")[0]].find(
      (objValue) => +objValue.id === +arrId[2]
    ).priceMarkup;
     return parseInt(price) + (parseInt(price) * pricePlus) / 100 + " ₽";
  }

