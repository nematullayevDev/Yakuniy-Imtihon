import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Home from "../../public/Home.svg";
import Search from "../../public/Search_S.svg";
import Library from "../../public/Library_S.svg";
import AddPlay from "../../public/+Library_S.svg";
import Liked from "../../public/Liked Songs_S.svg";

const SiteBarWrapp = styled.div`
  width: 20%;
  background-color: #000;
  color: #b3b3b3;
  padding-top: 70px;
`;

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  width: 245px;
  padding: 16px;
  gap: 16px;
  cursor: pointer;
  transition: opacity 0.15s;
  &:hover {
    opacity: 0.6;
  }
`;

const MenuItemDiv = styled.div`
  display: flex;
  align-items: center;
  width: 245px;
  padding: 16px;
  gap: 16px;
  cursor: pointer;
  transition: opacity 0.15s;
  &:hover {
    opacity: 0.6;
  }
`;

const Hr = styled.hr`
  width: 250px;
  border: none;
  border-top: 1px solid #282828;
  opacity: 0.15;
  margin-top: 30px;
`;

function LeftSitebar() {
  return (
    <SiteBarWrapp>
      <MenuItem to="/">
        <img
          className="opacity-60"
          src={Home}
          alt="Home Icon"
          width={25}
          height={25}
        />
        <h3 className="font-semibold mt-2">Home</h3>
      </MenuItem>
      <MenuItemDiv>
        <img
          className="opacity-60"
          src={Search}
          alt="Search Icon"
          width={25}
          height={25}
        />
        <h3 className="font-semibold mt-2">Search</h3>
      </MenuItemDiv>
      <MenuItemDiv>
        <img
          className="opacity-60"
          src={Library}
          alt="Library Icon"
          width={25}
          height={25}
        />
        <h3 className="font-semibold mt-2">Library</h3>
      </MenuItemDiv>
      <MenuItemDiv style={{ marginTop: "50px" }}>
        <img
          className="opacity-60"
          src={AddPlay}
          alt="Create Playlist Icon"
          width={25}
          height={25}
        />
        <h3 className="font-semibold">Create Playlist</h3>
      </MenuItemDiv>
      <MenuItem to="/likes">
        <img
          className="opacity-60"
          src={Liked}
          alt="Liked Songs Icon"
          width={25}
          height={25}
        />
        <h3 className="font-semibold">Liked Songs</h3>
      </MenuItem>
      <Hr />
    </SiteBarWrapp>
  );
}

export default LeftSitebar;
