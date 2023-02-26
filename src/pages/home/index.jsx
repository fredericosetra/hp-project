import * as S from "./styles";
import { Link } from "react-router-dom";

const routes = [
  {
    title: "Characters",
    link: "/characters",
  },
  {
    title: "Staff",
    link: "/staff",
  },
  {
    title: "House",
    link: "/house",
  },
  {
    title: "Spells",
    link: "/spells",
  },
];

function Home() {
  return (
    <S.Container>
      {routes.map((route) => {
        return (
          <Link to={route.link}>
            <S.ButtonCard>{route.title}</S.ButtonCard>
            {console.log(route.title)}
          </Link>
        );
      })}
    </S.Container>
  );
}

export default Home;
