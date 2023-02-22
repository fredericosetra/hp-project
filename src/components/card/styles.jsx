import HogwartsStamp from "../../assets/img/houses/hogwarts.png";
import AvatarWizard from "../../assets/img/miscellaneous/avatarWizard.png";
import styled from "styled-components";

export const Container = styled.div`
  width: 260px;
  padding: 40px 32px;
  background: ${(props) => props.backgroundColor ?? "grey"};
  border-radius: 30px;
  margin: 0 64px 80px 0;
`;

export const MainImageCustom = styled.div`
  width: 163px;
  height: 227px;
  background-size: cover;
  margin: -64px 0 0 170px;
  position: absolute;
  background-image: url(${(props) =>
    props.MainPhoto === "" ? AvatarWizard : props.MainPhoto});
  border-radius: 50px;
`;

export const Name = styled.div`
  font-size: 24px;
  color: white;
  text-transform: uppercase;
  position: relative;
  text-shadow: 1px 2px 4px #000;
  width: 162px;
  height: 50px;
`;

export const StampHouse = styled.div`
  width: 75px;
  height: 87px;
  background-size: cover;
  background-image: url(${(props) => props.stampHouse ?? HogwartsStamp});
  margin: 14px 0 0 42px;
`;

export const SubCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  border-radius: 16px;
  margin: 24px 0 42px 0;
  padding: 12px;
`;

export const AlignItens = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const Description = styled.div`
  font-size: 16px;
  text-align: center;
  width: 75px;
`;

export const DescriptionWand = styled(Description)`
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  border-radius: 16px;
  padding: 24px 0;
`;

export const TitleInfo = styled.div`
  background-color: ${(props) => props.tagButtonColorsHouse ?? "#616060"};
  border-radius: 8px;
  position: absolute;
  margin: -36px 0 0 0;
  text-transform: uppercase;
  padding: 5px 20px;
  color: white;
`;

export const ButtonMoreInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 50px;
  border-radius: 20px;
  font-size: 16px;
  color: #000;
  font-weight: bold;
  margin: 24px 0 0 0;
  cursor: pointer;
`;
