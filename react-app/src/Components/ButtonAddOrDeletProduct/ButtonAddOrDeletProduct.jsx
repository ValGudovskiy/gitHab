import "./ButtonAddOrDeletProduct.css";

export default function ButtonAddOrDeletProduct(props) {
  return (
    <span
      onClick={(e) => {
        props.handleOnclick(e);
      }}
      id={props.id}
      className={"buttonAddOrDeleteProduct " + (props.className || "")}
    >
      <span className=" buttonAddOrDeleteProduct_markerJointSpan">
        {props.svg === "delete" ? (
          <svg
            className="buttonAddOrDeleteProduct_svgJoin  buttonAddOrDeleteProduct_joinSvg"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-tid="c107311c"
          >
            <path
              d="M3 3L17 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
            <path
              d="M17 3L3 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        ) : props.svg === "like" ? (
          <svg
            className="buttonAddOrDeleteProduct_likeSvg  "
            width="26"
            height="21"
            viewBox="0 0 44 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="buttonAddOrDeleteProduct_likeSvgPath-1 "
              fillRule="evenodd"
              clipRule="evenodd"
              fill={props.select || "darkgray"}
              d="M3.30841 2.95447C7.29791 -0.875449 13.7444 -0.875449 17.7339 2.95447L22.0002 7.05027L26.2667 2.95447C30.2563 -0.875449 36.7027 -0.875449 40.6923 2.95447C44.6817 6.78439 44.6817 12.973 40.6923 16.803L22.0002 34.7472L3.30841 16.803C-0.681091 12.973 -0.681091 6.78439 3.30841 2.95447ZM14.7876 5.78289C12.4253 3.51507 8.61701 3.51507 6.25468 5.78289C3.89237 8.05071 3.89237 11.7067 6.25468 13.9746L22.0002 29.0904L37.7461 13.9746C40.1084 11.7067 40.1084 8.05071 37.7461 5.78289C35.3838 3.51507 31.5755 3.51507 29.2132 5.78289L22.0002 12.7072L14.7876 5.78289Z"
            ></path>
            <path
              className="buttonAddOrDeleteProduct_likeSvgPath-2"
              d="M6 5.5L22 21L38 5.5"
              stroke={props.select}
              strokeWidth="13"
            ></path>
          </svg>
        ) : (
          <svg
            className="buttonAddOrDeleteProduct_svgJoin "
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 80 80"
            xmlSpace="preserve"
          >
            <path
              fill="#F0F0F0"
              d="M8,75.5c-1.93,0-3.5-1.57-3.5-3.5V8c0-1.93,1.57-3.5,3.5-3.5h64c1.93,0,3.5,1.57,3.5,3.5v64   c0,1.93-1.57,3.5-3.5,3.5H8z"
            />
            <path
              fill="#7496C4"
              d="M72,5c1.654,0,3,1.346,3,3v64c0,1.654-1.346,3-3,3H8c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3    H72 M72,4H8C5.791,4,4,5.791,4,8v64c0,2.209,1.791,4,4,4h64c2.209,0,4-1.791,4-4V8C76,5.791,74.209,4,72,4L72,4z"
            />
            <polyline
              fill="none"
              stroke={props.marker ? "#A00000" : ""}
              strokeWidth="6"
              strokeMiterlimit="10"
              points="22,40.107 33.929,52.036 60.769,25.195   "
            />
          </svg>
        )}
      </span>
      <span className={props.classNameValue }> {props.value}</span>
    </span>
  );
}
