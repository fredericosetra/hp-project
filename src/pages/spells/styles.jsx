import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

export const Container = styled.div`
  margin: 24px;
`;

export const CustomTextField = styled(TextField)`
  margin: 24px 0 !important;
`;

export const CustomButton = styled(Button)`
  margin: 24px 0 24px 24px !important;
  height: 56px;
`;

export const AlignSpells = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
  border-radius: 20px;
  margin: 0 20px 32px 0;
  padding: 18px;
`;

export const Name = styled.div`
  margin: 0 0 24px 0;
`;

export const Description = styled.div``;
