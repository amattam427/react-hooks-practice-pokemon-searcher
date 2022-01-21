import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites}) {
  const [image, setImage] = useState(true)


  function handleClick(){
    setImage((image)=>!image);
  }

  return (
    <Card>
      <div>
        <div onClick={handleClick} className="image">
          <img src={image ? sprites.front : sprites.back} alt={name} />
          {/* <img src={sprites} alt={name} />  */}
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

