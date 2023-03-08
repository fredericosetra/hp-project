import { useEffect, useState } from "react";
import hpApi from "../../services/api";
import Card from "../../components/card";
import GryffindorStamp from "../../assets/img/houses/Gryffindor.png";
import HufflepuffStamp from "../../assets/img/houses/Hufflepuff.png";
import RavenclawStamp from "../../assets/img/houses/Ravenclaw.png";
import SlytherinStamp from "../../assets/img/houses/Slytherin.png";
import * as S from "./styles";
import Loading from "../../components/loading";
import { TextField } from "@mui/material";
import ItemNotFound from "../../components/itemNotFound";

const StampHouse = {
  Gryffindor: GryffindorStamp,
  Hufflepuff: HufflepuffStamp,
  Ravenclaw: RavenclawStamp,
  Slytherin: SlytherinStamp,
};

const colorsHouse = {
  Gryffindor: "#5f0202",
  Hufflepuff: "#c8a800",
  Ravenclaw: "#01015e",
  Slytherin: "#004e00",
};

const tagButtonColorsHouse = {
  Gryffindor: "#9f0505",
  Hufflepuff: "#988002",
  Ravenclaw: "#0000a4",
  Slytherin: "#006d00",
};

const btnHovColorsHouse = {
  Gryffindor: "#daa520",
  Hufflepuff: "#000000",
  Ravenclaw: "#cd7f32",
  Slytherin: "#c0c0c0",
};

function Characters() {
  const [characters, setCharacters] = useState();
  const [charactersNames, setCharactersNames] = useState("");
  const [charactersFiltered, setCharactersFiltered] = useState("");
  const [searchFilter, setSearchFilter] = useState();
  const [characterNotFound, setCharacterNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    hpApi
      .get("/characters")
      .then(function (response) {
        console.log(response.data);
        setCharacters(response.data);
        const namesCharacter = response.data.map((character) => character.name);
        namesCharacter.unshift("All Characters");
        setCharactersNames(namesCharacter);
        setCharactersFiltered(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  function handleCharacters(optionSelected) {
    console.log(optionSelected);
    console.log(typeof optionSelected);
    console.log(optionSelected.lenght);

    if (optionSelected === "All Characters") {
      setCharacterNotFound(false);
      setCharactersFiltered(characters);
    } else if (optionSelected) {
      setCharacterNotFound(false);
      const resultCharacter = characters.filter(
        (character) => character.name === optionSelected
      );
      setCharactersFiltered(resultCharacter);
    } else if (!optionSelected) {
      console.log("tela de not found 404");
      setCharacterNotFound(true);
    }
  }

  return (
    <>
      <S.CustomAutocomplete
        disablePortal
        id="charactereSearch"
        options={charactersNames}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search your character" />
        )}
        onInputChange={(event, newInputValue) => {
          setSearchFilter(newInputValue);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleCharacters(searchFilter);
          }
        }}
      />

      <S.CustomButton
        variant="outlined"
        onClick={() => handleCharacters(searchFilter)}
      >
        Search
      </S.CustomButton>

      <S.CustomButton
        variant="outlined"
        onClick={() => {
          setCharacterNotFound(false);
          setCharactersFiltered(characters);
        }}
      >
        Clear
      </S.CustomButton>

      {!loading ? (
        <S.Container>
          {charactersFiltered &&
            charactersFiltered.map((character, index) => {
              return !characterNotFound ? (
                <Card
                  key={index}
                  name={character.name}
                  photo={character.image}
                  stampHouse={StampHouse[character.house]}
                  backgroundColor={colorsHouse[character.house]}
                  tagButtonColorsHouse={tagButtonColorsHouse[character.house]}
                  species={character.species ?? "Uninformed"}
                  gender={character.gender ?? "Uninformed"}
                  birth={character.dateOfBirth ?? "Uninformed"}
                  wood={
                    character.wand.wood === ""
                      ? "Uninformed"
                      : character.wand.wood
                  }
                  core={
                    character.wand.core === ""
                      ? "Uninformed"
                      : character.wand.core
                  }
                  btnHovColorsHouse={btnHovColorsHouse[character.house]}
                  house={character.house}
                  wizard={character.wizard}
                  ancestry={character.ancestry}
                  eyeColour={character.eyeColour}
                  hairColour={character.hairColour}
                  patronus={character.patronus}
                  hogwartsStudent={character.hogwartsStudent}
                  hogwartsStaff={character.hogwartsStaff}
                  actor={character.actor}
                />
              ) : (
                <ItemNotFound description="Character not Found" />
              );
            })}
        </S.Container>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Characters;
