import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "../../assets/img/miscellaneous/close.png";

export const BoxCustom = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(23.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Container = styled.div`
  padding: 32px;
  text-transform: uppercase;
`;

export const ContainerCross = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Cross = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  margin: -12px -12px 0 0;
  background-image: url(${CloseIcon});
  background-size: cover;
`;

export const ButtonCustom = styled(Button)`
  && {
    margin-top: 32px;
    width: 100%;
    background-color: ${(props) => props.tagButtonColorsHouse};
    border-radius: 10px;
  }

  &&.css-sghohy-MuiButtonBase-root-MuiButton-root:hover {
    background-color: ${(props) => props.btnHovColorsHouse ?? "#ff0000"};
  }
`;

export const NameWizard = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
