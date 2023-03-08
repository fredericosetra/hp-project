import * as S from "./style";

function ItemNotFound({ description }) {
  return (
    <S.SpellNotFound>
      <S.SpellNotFoundImg />
      <S.SpellNotFoundText>{description}</S.SpellNotFoundText>
    </S.SpellNotFound>
  );
}

export default ItemNotFound;
