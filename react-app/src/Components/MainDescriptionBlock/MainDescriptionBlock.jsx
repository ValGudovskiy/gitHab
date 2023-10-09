 import styled from "styled-components";

let Section = styled.section`
  margin-bottom: 0;
`;
let Paragraph = styled.p`
  margin-bottom: 0;
`;

let Title = styled.h3``;

function MainDescriptionBlock(props) {
  const objDescriptionBlock = props.objProduct.descriptionBlock;
  return (
    <Section>
      <Title>{objDescriptionBlock.name}</Title>
      {objDescriptionBlock.nameValue.map((element,index) => {
        let block = <Paragraph key={'m'+index}>{element}</Paragraph>;
        if (typeof element==='object'&&!Array.isArray(element)) {
          block = (
            <Paragraph key={'m'+index}>
              {element.paragraph_1}
              <i>
                <b>{element.paragraph_2}</b>
              </i>
              {element.paragraph_3}
            </Paragraph>
          );
        }
        return block;
      })}
     </Section>
  );
}

export default MainDescriptionBlock;
