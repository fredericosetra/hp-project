import * as React from "react";
import Modal from "@mui/material/Modal";

import * as S from "./style";

function ModalCharacter({
  tagButtonColorsHouse,
  btnHovColorsHouse,
  name,
  photo,
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <S.ButtonCustom
        variant="contained"
        onClick={handleOpen}
        tagButtonColorsHouse={tagButtonColorsHouse}
        btnHovColorsHouse={btnHovColorsHouse}
      >
        more info
      </S.ButtonCustom>
      <Modal open={open} onClose={handleClose}>
        <S.BoxCustom>
          <S.Container>
            <S.ContainerCross>
              <S.Cross onClick={() => handleClose()} />
            </S.ContainerCross>
            <S.NameWizard>{name}</S.NameWizard>
            <p>photo: -----> {photo}</p>
            <p>species: -----> {species}</p>
            <p>gender: -----> {gender}</p>
            <p>birth: -----> {birth}</p>
            <p>Varinha: -----> </p>
            <p>wood: -----> {wood}</p>
            <p>core: -----> {core}</p>
            <p>core: -----> {core}</p>
            <p>house: -----> {house}</p>
            <p>wizard: -----> {wizard}</p>
            <p>ancestry: -----> {ancestry}</p>
            <p>eyeColour: -----> {eyeColour}</p>
            <p>hairColour: -----> {hairColour}</p>
            <p>patronus: -----> {patronus}</p>
            <p>hogwartsStudent: -----> {hogwartsStudent}</p>
            <p>hogwartsStaff: -----> {hogwartsStaff}</p>
            <p>actor: -----> {actor}</p>
          </S.Container>
        </S.BoxCustom>
      </Modal>
    </>
  );
}
export default ModalCharacter;
