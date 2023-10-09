import "./ButtonLikeOrCartOrProfilOrText.css";

function ButtonLikeOrCartOrProfilOrText(props) {
  return (
    <button
      className={["buttonAside", props.classBtn].join(" ")}
      onClick={props.onClick}
    >
      {props.contentBtn === "cart" ? (
        <svg
          className={"buttonAside__svg buttonAside__svgCart  "}
          width="43"
          height="35"
          viewBox="0 0 25 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={props.classSvg}
            stroke={props.fill}
            strokeWidth="1.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.799683 0.839233H4.30233H5.12213L5.28291 1.61096L5.74024 3.80618H19.3431H20.5235L20.3295 4.924L19.2993 10.8579L19.16 11.66H18.3129H7.37647L7.80062 13.696H18.3129V15.616H6.98081H6.16101L6.00023 14.8443L3.93985 4.95445L4.92044 4.76618L3.93985 4.95445L3.48252 2.75923H0.799683V0.839233ZM6.14024 5.72618L6.97647 9.74005H17.4658L18.1626 5.72618H6.14024ZM9.6758 18.0054C9.6758 18.8889 8.9316 19.6034 8.01119 19.6034C7.09075 19.6034 6.34656 18.8889 6.34656 18.0054C6.34656 17.1218 7.09075 16.4261 8.01119 16.4261C8.9316 16.4261 9.6758 17.1218 9.6758 18.0054ZM16.2534 19.6034C17.1738 19.6034 17.918 18.8889 17.918 18.0054C17.918 17.1218 17.1738 16.4261 16.2534 16.4261C15.3329 16.4261 14.5887 17.1218 14.5887 18.0054C14.5887 18.8889 15.3329 19.6034 16.2534 19.6034Z"
          />
        </svg>
      ) : props.contentBtn === "like" ? (
        <svg
        className="buttonAside__svgLike"
          width="44"
          height="42"
          viewBox="0 0 44 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={
              "buttonAside__svg " + props.classPathSvg + " " + props.classSvg
            }
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.30841 2.95447C7.29791 -0.875449 13.7444 -0.875449 17.7339 2.95447L22.0002 7.05027L26.2667 2.95447C30.2563 -0.875449 36.7027 -0.875449 40.6923 2.95447C44.6817 6.78439 44.6817 12.973 40.6923 16.803L22.0002 34.7472L3.30841 16.803C-0.681091 12.973 -0.681091 6.78439 3.30841 2.95447ZM14.7876 5.78289C12.4253 3.51507 8.61701 3.51507 6.25468 5.78289C3.89237 8.05071 3.89237 11.7067 6.25468 13.9746L22.0002 29.0904L37.7461 13.9746C40.1084 11.7067 40.1084 8.05071 37.7461 5.78289C35.3838 3.51507 31.5755 3.51507 29.2132 5.78289L22.0002 12.7072L14.7876 5.78289Z"
          />
          <path
            d="M6 5.5L22 21L38 5.5"
            stroke={props.select}
            strokeWidth="14"
          />
        </svg>
      ) : props.contentBtn === "profil" ? (
        <svg
          className={"buttonAside__svg buttonAside__svgProfil "}
          version="1.1"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={"buttonAside__svg " + props.classSvg}
            strokeWidth="1.5"
            d="M30.47,24.37a17.16,17.16,0,0,0-24.93,0A2,2,0,0,0,5,25.74V31a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V25.74A2,2,0,0,0,30.47,24.37ZM29,31H7V25.73a15.17,15.17,0,0,1,22,0h0Z"
          ></path>
          <path
            className={"buttonAside__svg " + props.classSvg}
            d="M18,17a7,7,0,0,0,6.85-5.56,7.4,7.4,0,0,1-2.24-6.69A7,7,0,1,0,18,17ZM18,5a5,5,0,1,1-5,5A5,5,0,0,1,18,5Z"
          ></path>
          <circle className={"buttonAside__svg " + props.classSvgAuth} cx="30" cy="6" r="5"></circle>
          <rect className={props.classSvgRect}x="0" y="0" width="36" height="36" fillOpacity="0" />
        </svg>
      ) : (
        props.contentBtn
      )}
      <span className={props.classSpan1}>
        <span className={props.classSpan2}>{props.contentSpan2}</span>
      </span>
    </button>
  );
}

export default ButtonLikeOrCartOrProfilOrText;
