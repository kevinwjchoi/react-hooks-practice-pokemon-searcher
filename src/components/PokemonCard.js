import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [clicked, setClicked] = useState(false);
  const {name, hp, sprites} = pokemon;
  const {front, back} = sprites;
  const [imageSrc, setImageSrc] = useState(front);

  

  function handleClick(){
    if(clicked === false){
      setImageSrc(back)
      setClicked((clicked) => !clicked);
    } else {
      setImageSrc(front)
      setClicked((clicked) => !clicked)
    }
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image" >
          <img src={imageSrc} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
