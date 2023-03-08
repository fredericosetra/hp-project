import { useEffect, useState } from "react";
import hpApi from "../../services/api";
import Loading from "../../components/loading";
import TextField from "@mui/material/TextField";
import ItemNotFound from "../../components/itemNotFound";

import * as S from "./styles";

function Spells() {
  const [spellsData, setSpellsData] = useState();
  const [spells, setSpells] = useState();
  const [autoCompleteSpells, setautoCompleteSpells] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [spellNotFound, setSpellNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    hpApi
      .get("/spells")
      .then(function (response) {
        setSpellsData(response.data);
        setSpells(response.data);
        const handleAutoComplete = response.data.map((spell) => spell.name);
        handleAutoComplete.unshift("All Spells");
        setautoCompleteSpells(handleAutoComplete);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  function searchSpells(searchFilter) {
    if (searchFilter === "All Spells") {
      setSpellNotFound(false);
      setSpells(spellsData);
    } else if (searchFilter.length === 0) {
      setSpellNotFound(true);
    } else if (searchFilter.length > 1) {
      const resultSpell = spellsData.filter(
        (spell) => spell.name === searchFilter
      );
      if (resultSpell.length > 0) {
        setSpellNotFound(false);
        setSpells(resultSpell);
      }
    }
  }

  return (
    <>
      {loading && <Loading />}
      <S.ButtonAlign>
        <S.CustomAutocomplete
          disablePortal
          id="spellSearch"
          options={autoCompleteSpells}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="research your spell" />
          )}
          onInputChange={(event, newInputValue) => {
            setSearchFilter(newInputValue);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              searchSpells(searchFilter);
            }
          }}
        />

        <S.CustomButton
          variant="outlined"
          onClick={() => searchSpells(searchFilter)}
        >
          Search
        </S.CustomButton>

        <S.CustomButton
          variant="outlined"
          onClick={() => {
            setSpellNotFound(false);
            setSpells(spellsData);
          }}
        >
          Clear
        </S.CustomButton>
      </S.ButtonAlign>

      <S.Container>
        {!spellNotFound ? (
          <S.AlignSpells>
            {spells &&
              autoCompleteSpells &&
              spells.map((spell, index) => {
                return (
                  <S.Card key={index}>
                    <S.Name>Name: {spell.name}</S.Name>
                    <S.Description>
                      Description: {spell.description}
                    </S.Description>
                  </S.Card>
                );
              })}
          </S.AlignSpells>
        ) : (
          <ItemNotFound description="Spell not Found" />
        )}
      </S.Container>
    </>
  );
}

export default Spells;
