import { useEffect, useState } from "react";
import hpApi from "../../services/api";
import Card from "../../components/card";
import GryffindorStamp from "../../assets/img/houses/Gryffindor.png";
import HufflepuffStamp from "../../assets/img/houses/Hufflepuff.png";
import RavenclawStamp from "../../assets/img/houses/Ravenclaw.png";
import SlytherinStamp from "../../assets/img/houses/Slytherin.png";
import * as S from "./styles";

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

  useEffect(() => {
    hpApi
      .get("/characters")
      .then(function (response) {
        console.log(response.data);
        setCharacters(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <S.Container>
      {characters &&
        characters.map((character) => {
          return (
            <Card
              name={character.name}
              photo={character.image}
              stampHouse={StampHouse[character.house]}
              backgroundColor={colorsHouse[character.house]}
              tagButtonColorsHouse={tagButtonColorsHouse[character.house]}
              species={character.species ?? "Uninformed"}
              gender={character.gender ?? "Uninformed"}
              birth={character.dateOfBirth ?? "Uninformed"}
              wood={
                character.wand.wood === "" ? "Uninformed" : character.wand.wood
              }
              core={
                character.wand.core === "" ? "Uninformed" : character.wand.core
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
          );
        })}
    </S.Container>
  );
}

export default Characters;
