import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HomeWrapp = styled.div`
  padding: 20px;
`;

const Images = styled.div`
  display: flex;
  gap: 20px;
`;


const HeaderText = styled.div`
  font-size: 39px;
  font-weight: 700;
  line-height: 49.33px;
  letter-spacing: -0.01em;
  text-align: left;
  color: white;
  margin-bottom: 29px;
`;

const HeaderCardWrap = styled.div`
  margin-top: 30px;
`;

const UlWrapp = styled.ul`
  display: flex;
  gap: 20px;
`;

const LiWrapp = styled.li`
  width: 480px;
  height: 82px;
  background-color: #3d3d8c;
  border-radius: 10px;
`;

const CardWrapp = styled.div``;

function HomeHeader() {
  const [featured, setFeatured] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_FUTURED_API}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setFeatured(data.playlists.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [token]);

  return (
    <HomeWrapp>
      <Images>
        <img
          src="../Back.svg"
          alt=""
          width={40}
          height={40}
          className="cursor-pointer"
        />
        <img
          src="Forward.svg"
          alt=""
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </Images>

      <HeaderCardWrap>
        <HeaderText>Good afternoon</HeaderText>

        <UlWrapp>
          <CardWrapp>
            <LiWrapp className="mb-6 flex items-center gap-7 text-white font-semibold text-[20px]">
              <img src="Album Cover.svg" alt="" width={82} height={82} />
              <h4>Chill Mix</h4>
            </LiWrapp>
            <LiWrapp className="mb-6 flex items-center gap-7 text-white font-semibold text-[20px]">
              <img src="Album Cover (1).svg" alt="" width={82} height={82} />
              <h4>Daily Mix 1</h4>
            </LiWrapp>
            <LiWrapp className="mb-6 flex items-center gap-7 text-white font-semibold text-[20px]">
              <img src="Album Cover (2).svg" alt="" width={82} height={82} />
              <h4>Folk & Acoustic Mix</h4>
            </LiWrapp>
          </CardWrapp>
          <CardWrapp>
            <LiWrapp className="mb-6 flex items-center gap-7 text-white font-semibold text-[20px]">
              <img src="Album Cover (3).svg" alt="" width={82} height={82} />
              <h4>Pop Mix</h4>
            </LiWrapp>
            <LiWrapp className="mb-6 flex items-center gap-7 text-white font-semibold text-[20px]">
              <img src="Album Cover (4).svg" alt="" width={82} height={82} />
              <h4>Daily Mix 5</h4>
            </LiWrapp>
            <LiWrapp className="mb-6 flex items-center gap-7 text-white font-semibold text-[20px]">
              <img src="Album Cover (5).svg" alt="" width={82} height={82} />
              <h4>Daily Mix 4</h4>
            </LiWrapp>
          </CardWrapp>
        </UlWrapp>
      </HeaderCardWrap>
    </HomeWrapp>
  );
}

export default HomeHeader;
