
/**
 * 
 * @param {*} event 
 * @param {*} obj 
 * @return in event.target.form.childNodes string of obj  
 */

export default function creatTextOfInputInP(event, obj) {
  let formNode = event.target.form.childNodes;
  let pElementForm = formNode[formNode.length - 2];

  pElementForm.innerText = Object.keys(obj)
    .map((key) => key + ": " + obj[key])
    .join("; ");
}
