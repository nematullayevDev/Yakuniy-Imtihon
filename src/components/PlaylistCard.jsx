import { useNavigate } from "react-router-dom";

function PlaylistCard(props) {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate(`music/${props.data.id}`);
  }

  return (
    <div
      className="bg-[#1b1b1b] w-[224px] h-[324px] rounded-lg p-[20px] cursor-pointer hover:bg-[#1b1b1be7]"
      onClick={handleRedirect}
    >
      <div className="img rounded-lg">
        <img
          className="w-[100%] rounded-lg"
          src={props.data.images[0].url}
          alt=""
          height={180}  
        />
      </div>
      <div className="desc mt-[25px]">
        <h3 className="text-white font-semibold">{props.data.name}</h3>
        <p className="text-[#717171] w-[100%] font-medium">
          {props.data.description}
        </p>
      </div>
    </div>
  );
}

export default PlaylistCard;
