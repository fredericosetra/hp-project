import { useEffect, useState } from "react";
import hpApi from "../../services/api";
import * as S from "./styles";

function Spells() {
  const [spells, setSpells] = useState();
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    getSpells();
  }, []);

  function getSpells() {
    hpApi
      .get("/spells")
      .then(function (response) {
        setSpells(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function searchSpells(searchFilter) {
    if (searchFilter.length > 1) {
      const result = spells.filter(function (spell) {
        return spell.name === searchFilter;
      });

      result.length > 0 && setSpells(result);

      result.length === 0 &&
        alert(
          "Criar um componente na tela que somente aparece quando a pesquisa não funcionar"
        );
    } else {
      getSpells();
    }
  }

  return (
    <S.Container>
      <S.CustomTextField
        id="search"
        label="Digite o feitiço"
        variant="outlined"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />

      <S.CustomButton
        variant="outlined"
        onClick={() => searchSpells(searchFilter)}
      >
        Pesquisar
      </S.CustomButton>

      <S.AlignSpells>
        {spells &&
          spells.map((spell, index) => {
            return (
              <S.Card key={index}>
                <S.Name>Name: {spell.name}</S.Name>
                <S.Description>Description: {spell.description} </S.Description>
              </S.Card>
            );
          })}
      </S.AlignSpells>
    </S.Container>
  );
}

export default Spells;
