import styled from "@emotion/styled";
import UserPlus from "../../public/User Plus_S.svg";
import Union from "../../public/Union.svg";
import Frame from "../../public/Frame 37 (1).svg";

const SiteBarWrapp = styled.div`
  width: 22%;
  background-color: #000;
  color: #b3b3b3;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;
  cursor: pointer;
  margin-top: 16px;
`;

const Description = styled.p`
  width: 250px;
  text-align: center;
  margin: 39px auto 23px;
`;

const IconList = styled.ul`
  padding: 0;
  list-style: none;
`;

const IconItem = styled.li`
  padding: 20px;
`;

const CenteredText = styled.p`
  width: 250px;
  text-align: center;
  margin: auto;
`;

const ButtonWrapper = styled.div`
  width: 250px;
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const Button = styled.button`
  color: black;
  background-color: white;
  padding: 20px 64px;
  border-radius: 40px;
  transition: background-color 0.15s;
  &:hover {
    background-color: #ffffffc4;
  }
`;

function RightSitebar() {
  return (
    <SiteBarWrapp>
      <div className="px-[5px] flex flex-col">
        <Header>
          <h3 className="font-semibold mt-2">Friend Activity</h3>
          <div className="flex gap-3">
            <img className="mt-1" src={UserPlus} alt="Add Friend Icon" />
            <img className="mt-1" src={Union} alt="Union Icon" />
          </div>
        </Header>

        <Description>
          Let friends and followers on Spotify see what you’re listening to.
        </Description>

        <IconList>
          <IconItem>
            <img src={Frame} alt="Friend Activity Icon" />
          </IconItem>
          <IconItem>
            <img src={Frame} alt="Friend Activity Icon" />
          </IconItem>
          <IconItem>
            <img src={Frame} alt="Friend Activity Icon" />
          </IconItem>
        </IconList>

        <CenteredText>
          Go to Settings Social and enable “Share my listening activity on
          Spotify.” You can turn this off at any time.
        </CenteredText>

        <ButtonWrapper>
          <Button>SETTINGS</Button>
        </ButtonWrapper>
      </div>
    </SiteBarWrapp>
  );
}

export default RightSitebar;
