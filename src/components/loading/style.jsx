import styled from "styled-components";
import Box from "@mui/material/Box";

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
  display: flex;
  justify-content: center;
  align-items: center;
`;
