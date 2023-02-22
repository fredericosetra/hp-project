import * as S from "./styles";
import ModalCharacter from "./../modalCharacter";

function Card({
  name,
  photo,
  stampHouse,
  backgroundColor,
  tagButtonColorsHouse,
  btnHovColorsHouse,
  species,
  gender,
  birth,
  wood,
  core,
  house,
  wizard,
  ancestry,
  eyeColour,
  hairColour,
  patronus,
  hogwartsStudent,
  hogwartsStaff,
  actor,
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

      <S.CardInfo>
        <S.TitleInfo tagButtonColorsHouse={tagButtonColorsHouse}>
          Wand
        </S.TitleInfo>
        <S.AlignItens>
          <S.SubTitle>Wood</S.SubTitle>
          <S.DescriptionWand>{wood}</S.DescriptionWand>
        </S.AlignItens>
        <S.AlignItens>
          <S.SubTitle>Core</S.SubTitle>
          <S.DescriptionWand>{core}</S.DescriptionWand>
        </S.AlignItens>
      </S.CardInfo>
      <ModalCharacter
        tagButtonColorsHouse={tagButtonColorsHouse}
        btnHovColorsHouse={btnHovColorsHouse}
        name={name}
        photo={photo}
        species={species}
        gender={gender}
        birth={birth}
        wood={wood}
        core={core}
        house={house}
        wizard={wizard}
        ancestry={ancestry}
        eyeColour={eyeColour}
        hairColour={hairColour}
        patronus={patronus}
        hogwartsStudent={hogwartsStudent}
        hogwartsStaff={hogwartsStaff}
        actor={actor}
      />
    </S.Container>
  );
}

export default Card;
