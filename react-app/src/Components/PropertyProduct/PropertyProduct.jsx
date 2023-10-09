import styled from "styled-components";

let MobileUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-position: inside;
  list-style-type: disc;
`;

let Li = styled.li`
  &::marker {
    color: #888888;
    font-size: 1.5em;
  }
`;

let LinkA = styled.a`
   {
    cursor: pointer;
    color: #008cf0;
    text-decoration: none;
  }
  &:hover {
    color: #f36223;
  }
  &:active {
    color: #a93a09;
  }
`;

export default function PropertyProduct(props) {
  const arrProperty = props.objSpecification.property;
  return (
    <MobileUl>
      {arrProperty.map((element) => {
        let block = (
          <Li key={element.id}>
            {element.name}
            <b>
              {element.value && props.configName}
              {element.nameValue}
            </b>
          </Li>
        );
        if (element.nameSrc) {
          block = (
            <Li key={element.id}>
              {element.name}
              <b>
                <LinkA href={element.nameSrc} target="_blank" rel="noreferrer">
                  {element.nameValue}
                  {element.value}
                </LinkA>
              </b>
            </Li>
          );
        }
        return block;
      })}
    </MobileUl>
  );
}
