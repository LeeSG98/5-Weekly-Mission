import * as Styled from './MainCard.styled';

interface CardType {
  titleStyle: { background: string };
  title: string[];
  effect: string;
  text: string;
  img: string;
}

interface CardProps {
  list: CardType;
  index: number;
}

function MainCard({ list, index }: CardProps) {
  return (
    <Styled.Card $index={index}>
      <Styled.CardTitleBox $index={index}>
        <Styled.CardTitle style={list.titleStyle}>
          {list.title[0]}
          <Styled.CardTextEffect>{list.effect}</Styled.CardTextEffect>
          {list.title[1]}
        </Styled.CardTitle>
        <Styled.CardText dangerouslySetInnerHTML={{ __html: list.text }} />
      </Styled.CardTitleBox>
      <Styled.CardImgBox>
        <Styled.CardImg width={385} height={315} src={list.img} alt="카드 이미지" />
      </Styled.CardImgBox>
      <Styled.CardMobileText dangerouslySetInnerHTML={{ __html: list.text }} />
    </Styled.Card>
  );
}

export default MainCard;