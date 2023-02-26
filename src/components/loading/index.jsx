import * as React from "react";
import Modal from "@mui/material/Modal";

import * as S from "./style";

function Loading({ open }) {
  return (
    <Modal open={open}>
      <S.Container>carregando</S.Container>
    </Modal>
  );
}
export default Loading;
