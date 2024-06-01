import HomeHero from "../components/HomeHero";
import styled from "@emotion/styled";
import PlaylistCard from "../components/PlaylistCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetToken } from "../components/Utiles";
import { create } from "../redux/authSlice";
import Footer from "../components/Footer";
function Home() {
  const HomeWrapp = styled.div`
    width: 66%;
    background-color: #;
    background: linear-gradient(180deg, #3333a3 5.09%, #121212 55.4%);
  `;
  const Cardwrapp = styled.ul``;
  const Container = styled.li`
    max-width: 990px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    aligin-items: center;
    flex-wrap: wrap;
    gap: 10px;
  `;

  const [featured, serFeatured] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_API_MUSIC}browse/featured-playlists`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          serFeatured(data.playlists.items);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      GetToken()
        .then((res) => {
          dispatch(create(res));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  return (
    <HomeWrapp>
      <HomeHero />
      <Cardwrapp>
        <Container>
          {featured.length > 0 &&
            featured.map((el, index) => {
              console.log(el);
              return <PlaylistCard key={index} data={el} />;
            })}
        </Container>
      </Cardwrapp>
      
    </HomeWrapp>
  );
}

export default Home;
