import RonConfused from "../../assets/img/miscellaneous/feiticoNaoEncontrado.gif";
import styled from "styled-components";

export const SpellNotFound = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const SpellNotFoundText = styled.div`
  text-align: center;
  font-size: 20px;
  margin: 24px 0 0 0;
  text-transform: uppercase;
  width: 176px;
`;

export const SpellNotFoundImg = styled.div`
  background-image: url(${RonConfused});
  width: 300px;
  height: 214px;
  border-radius: 20px;
`;
