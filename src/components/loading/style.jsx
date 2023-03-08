import styled, { keyframes } from "styled-components";

const Slime = keyframes`
  0%{
    height: 0%;
  }
  10%{
    height: 10%;
  }
  15%{
    height: 15%;
  }
  20%{
    height: 20%;
  }
  25%{
    height: 25%;
  }
  30%{
    height: 30%;
  }
  35%{
    height: 35%;
  }
  40%{
    height: 40%;
  }
  45%{
    height: 45%;
  }
  50%{
    height: 50%;
  }
  55%{
    height: 55%;
  }
  60%{
    height: 60%;
  }
  65%{
    height: 65%;
  }
  70%{
    height: 70%;
  }
  75%{
    height: 75%;
  }
  80%{
    height: 80%;
  }
  85%{
    height: 85%;
  }
  90%{
    height: 90%;
  }
  95%{
    height: 92%;
  }
  100%{
    height: 93%;
  }
`;

export const Box = styled.div`
  position: absolute;
  background-color: rgb(255, 255, 255, 80%);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0;
`;

export const Container = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
`;

export const Glass = styled.div`
  position: absolute;
  height: 80%;
  width: 20%;
  background: #b5f0e8;
  top: 20%;
  left: 40%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  z-index: 2;
`;

export const CapLeft = styled.div`
  position: absolute;
  width: 50%;
  height: 15%;
  top: -15%;
  background: #b9661c;
`;

export const CapRight = styled.div`
  position: absolute;
  width: 50%;
  height: 15%;
  top: -15%;
  right: 0%;
  background: #9a501d;
`;

export const Fill = styled.div`
  position: absolute;
  height: 90%;
  width: 80%;
  background: #da0000;
  opacity: 0.8;
  bottom: 5%;
  left: 10%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  animation: ${Slime} 1.5s infinite;
  z-index: 1;
`;

export const Bubble1 = styled.div`
  position: absolute;
  height: 10%;
  width: 35%;
  top: 10%;
  left: 15%;
  border-radius: 50%;
  background: #bf0303;
`;

export const Bubble2 = styled.div`
  position: absolute;
  height: 8%;
  width: 33%;
  top: 25%;
  right: 15%;
  border-radius: 50%;
  background: #bf0303;
`;

export const Bubble3 = styled.div`
  position: absolute;
  height: 10%;
  width: 35%;
  top: 40%;
  left: 15%;
  border-radius: 50%;
  background: #bf0303;
`;

export const Bubble4 = styled.div`
  position: absolute;
  height: 8%;
  width: 33%;
  top: 55%;
  right: 15%;
  border-radius: 50%;
  background: #bf0303;
`;

export const Bubble5 = styled.div`
  position: absolute;
  height: 8%;
  width: 33%;
  top: 75%;
  left: 15%;
  border-radius: 50%;
  background: #bf0303;
`;
