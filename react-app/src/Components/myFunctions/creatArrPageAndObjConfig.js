/**
 * 
 * @param {*} arr массив выбранных продуктов
 * @param {*} arr2 исходный массив продуктов
 * @returns { creatArr, creatObj } 
 */

export default function creatArrPageAndObjConfig(arr, arr2) {
  let creatArr = [];
  let creatObj = {};

  arr.forEach((element) => {
    let arrId = element.id.split("/");
    let obj =
      arr2.find((el) => {
        return Object.keys(el.products).includes(arrId[0]);
      })?.products ?? {};
    let objProduct = obj[arrId[0]];
    let name_header = objProduct.objSpecification.name_header;
    let objProperty = objProduct.objSpecification.property;

    creatObj[arrId[0]] = objProduct.arrConfigButtonMamory;

    creatArr.push({
      src: objProduct.arrConfigProduct.find(
        (element) => element.id === arrId[0] + "/" + arrId[1] + "/"
      ).src,
      arrSpecification: (function () {
        let arrProperty = [];
        arrProperty.push(name_header);
        objProperty.forEach((element) => {
          if (element.value) {
            arrProperty.push(
              element.name + " " + arrId[2] + " " + element.nameValue
            );
          } else {
            arrProperty.push(element.name + element.nameValue);
          }
        });
        return arrProperty;
      })(),
      id: element.id,
      price: objProduct.objSpecification.asidePrice__priceNew,
      oldPrice: objProduct.objSpecification.asidePrice__priceOld,
    });
  });
  console.log(creatArr,creatObj)
  return { creatArr, creatObj };
}
