export default function changeArrDeletElementOfArr(arr, id) {
  let j = 0;
  let indexElementArr = arr.findIndex((el) => el.id === id);
  if (indexElementArr >= 0) {
    j = 1;
  } else {
    j = 0;
  }
  arr.splice(indexElementArr, j);
}
