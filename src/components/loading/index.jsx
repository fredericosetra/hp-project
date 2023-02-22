import * as React from "react";
import Modal from "@mui/material/Modal";

import * as S from "./style";

function ModalCharacter() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
      <Modal open={open} onClose={handleClose}>
        <S.BoxCustom>
          <S.Container>
            
           </S.Container>
        </S.BoxCustom>
      </Modal>
    </div>
  );
}
export default ModalCharacter;
