import * as React from "react";

import * as S from "./style";

function Loading() {
  return (
    <S.Box>
      <S.Container>
        <S.Glass>
          <S.CapLeft />
          <S.CapRight />
          <S.Fill>
            <S.Bubble1 />
            <S.Bubble2 />
            <S.Bubble3 />
            <S.Bubble4 />
            <S.Bubble5 />
          </S.Fill>
        </S.Glass>
      </S.Container>
    </S.Box>
  );
}
export default Loading;
