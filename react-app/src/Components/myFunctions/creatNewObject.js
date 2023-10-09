export default   function creatNewObject(obj, num,id) {
    let newObj = {};
    Object.keys(obj).forEach((el) => {
      if (el === id) {
        newObj[el] = num;
      } else {
        newObj[el] = obj[el];
      }
    });
    return newObj;
  }
