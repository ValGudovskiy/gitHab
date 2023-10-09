import "./Advertisement.css";

let infoAdvert = [
  { id: "1",
   class: "aside__iframe",
    src: "../../../advert/advertisement.html" },
  {
    id: "2",
    class: "aside__iframe aside__iframe_2",
    src: "../../../advert/advertisement.html",
  },
];


function Advertisement() {
  return (
    <div className="aside__conteiner">
      <p className="aside__p">Реклама</p>
      <div className="aside__advert">
        {infoAdvert.map((advert) => (
          <iframe
            key={advert.id}
            title=" "
            className={advert.class}
            src={advert.src}
          ></iframe>
        ))}
      </div>
    </div>
  );
}

export default Advertisement;
