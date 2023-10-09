"use strict";
let divIndex = document.querySelector(".index");
divIndex.style = "background:blue; padding:8px;";

let divMain = document.createElement("div");

divMain.style = "background:yellow; border-radius:40%; padding:8px;";
divIndex.appendChild(divMain);
let results;
function whatIsObj(obj) {
  return {}.toString.call(obj).split(" ")[1].replace("]", "").toLowerCase();
}

try {
  fetch("https://swapi.dev/api/planets?count=1")
    .then((response) => response.json())
    .then((res) => {
      let ss = res.results;
      console.log(res, ss);
      ss.forEach((el) => {
        let p = document.createElement("p");
        let keys = Object.keys(el);
        p.innerHTML = `${keys
          .map((key, i) => {
            let ind = ["white", "black"];
            if (i % 2 === 0) {
              ind = ["black", "white"];
            }
            return `<p style='color:${ind[1]};background:${ind[0]}'>${key}: ${
              whatIsObj(el[key]) === "array"
                ? el[key]
                    .map(
                      (ev, i) =>
                        `<br/><a href=${ev}style='margin:15px;padding:15px;color:${
                          i % 2 === 0 ? "gray" : "orange"
                        }'>${ev}</a>`
                    )
                    .join("")
                : el[key]
            }</p>`;
          })
          .join(" ")}<p class='act' style='color:red'>-/-/-/-/-/-</p>`;
        divMain.append(p);
      });
    });
} catch {
  console.log("error///https://swapi.dev/");
}
// f=await fetch('https://swapi.dev/api/planets').then(res=>res.json())

function strInHtml(str){
  return (new DOMParser().parseFromString(str,"text/html").body)
}

fetch('http://127.0.0.1:5500/index.html').then((resp)=>resp.text())
.then((res)=>{console.log(strInHtml(res));
document.body.children.append(strInHtml(res))
})