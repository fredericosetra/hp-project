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

const ColorsHouse = {
  Gryffindor: "#5f0202",
  Hufflepuff: "#c8a800",
  Ravenclaw: "#01015e",
  Slytherin: "#004e00",
};

function Home() {
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
    characters &&
    characters.map((character) => {
      return (
        <>
          <Card
            name={character.name}
            photo={character.image}
            stampHouse={StampHouse[character.house]}
            backgroundColor={ColorsHouse[character.house]}
            species={character.species}
            gender={character.gender}
            birth={character.dateOfBirth}
          />
        </>
      );
    })
  );
}

export default Home;
