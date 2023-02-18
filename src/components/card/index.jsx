import * as S from "./styles";

function Card({
  name,
  photo,
  stampHouse,
  backgroundColor,
  species,
  gender,
  birth,
}) {
  return (
    <S.Container backgroundColor={backgroundColor}>
      <S.MainImageCustom MainPhoto={photo} />
      <S.Name>{name}</S.Name>
      <S.StampHouse stampHouse={stampHouse} />

      <S.SubCard>
        <S.AlignItens>
          <S.SubTitle>Species</S.SubTitle>
          <S.Description>{species}</S.Description>
        </S.AlignItens>
        <S.AlignItens>
          <S.SubTitle>Gender</S.SubTitle>
          <S.Description>{gender}</S.Description>
        </S.AlignItens>
        <S.AlignItens>
          <S.SubTitle>Birth</S.SubTitle>
          <S.Description>{birth}</S.Description>
        </S.AlignItens>
      </S.SubCard>

      <S.CardEvolution>
        <S.TitleEvolution tagBackground="grey">Evolution</S.TitleEvolution>
        <S.AlignEvolution>
          <S.EvolutionsImageCustom />
          <S.EvolutionsName>Pichu</S.EvolutionsName>
        </S.AlignEvolution>
        <S.AlignEvolution>
          <S.EvolutionsImageCustom />
          <S.EvolutionsName>Pikachu</S.EvolutionsName>
        </S.AlignEvolution>
        <S.AlignEvolution>
          <S.EvolutionsImageCustom />
          <S.EvolutionsName>Raichu</S.EvolutionsName>
        </S.AlignEvolution>
      </S.CardEvolution>
      <S.ButtonMoreInfo>more info</S.ButtonMoreInfo>
    </S.Container>
  );
}

export default Card;
