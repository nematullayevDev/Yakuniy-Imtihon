import styled from "@emotion/styled";
import LikesImg from "../../public/LikesPage.svg";
import Footer from "../components/Footer";
import { IoHeartDislikeOutline } from "react-icons/io5";

function Likes() {
  const HomeWrapp = styled.div`
    width: 66%;
    background: linear-gradient(180deg, #604ec1 5.09%, #121212 43.28%);
  `;
  const Images = styled.div`
    display: flex;
    gap: 20px;
    margin-left: 20px;
  `;
  const Container = styled.li`
    max-width: 990px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    aligin-items: center;
    flex-wrap: wrap;
    gap: 10px;
  `;
  return (
    <HomeWrapp className="flex flex-col items-center">
      <Container>
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

        <div className="flex items-end mt-6 gap-7">
          <img src={LikesImg} alt="" width={290} height={290} />
          <div className="text-white">
            <h4 className="w-[84px] mb-[-20px]">PUBLIC PLAYLIST</h4>
            <h1 className="font-bold text-[90px]">Liked Songs</h1>
          </div>
        </div>
      </Container>

      <div className="mb-[250px] mt-[100px]">
        <IoHeartDislikeOutline className="text-white text-9xl mb-[10px]"></IoHeartDislikeOutline>
      </div>
    </HomeWrapp>
  );
}

export default Likes;
